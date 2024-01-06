from djoser.serializers import UserCreateSerializer
from .models import User,Recipe,Ingredient,Steps
from rest_framework import serializers


class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ['id','email','name','password']
        extra_kwargs = {
            'password':{'write_only':True}
        }


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['recipe','ingredients']

class StepSerializer(serializers.ModelSerializer):
    class Meta:
        model = Steps
        fields = ['recipe','steps']

class RecipeSerializer(serializers.ModelSerializer):
    recipe_ingredient = IngredientSerializer(many=True,read_only=True)
    uploaded_ingredient = serializers.ListField(
        child = serializers.CharField(max_length = 100),
        write_only=True
    )

    recipe_step = StepSerializer(many=True,read_only=True)
    uploaded_step =serializers.ListField(
        child = serializers.CharField(max_length = 200),
        write_only=True
    )
    class Meta:
        model = Recipe
        fields = ['id','user','name','description','time','image','recipe_ingredient','uploaded_ingredient','recipe_step','uploaded_step']

    def create(self,validated_data):
                validated_data.get("uploaded_ingredient")  
                validated_data.get('uploaded_step')
                uploaded_ingredient = validated_data.pop("uploaded_ingredient")
                uploaded_step = validated_data.pop('uploaded_step')
                recipe = Recipe.objects.create(**validated_data)
                for ingredients in uploaded_ingredient:
                    Ingredient.objects.create(recipe=recipe, ingredients = ingredients)
                for steps in uploaded_step:
                    Steps.objects.create(recipe=recipe,steps=steps)
                return recipe

