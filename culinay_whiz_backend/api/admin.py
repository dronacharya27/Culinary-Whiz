from django.contrib import admin
from .models import User,Recipe,Ingredient,Steps
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

class UserAdmin(BaseUserAdmin):

    list_display = ["id","email", "name","is_admin"]
    list_filter = ["email","name"]
    fieldsets = [
        ('User Credentials', {"fields": ["email", "password"]}),
        ("Personal info", {"fields": ["name"]}),
        ("Permissions", {"fields": ["is_admin"]}),
    ]
   
    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": ["email", "name","password1"],
            },
        ),
    ]
    search_fields = ["email"]
    ordering = ["email"]
    filter_horizontal = []



admin.site.register(User, UserAdmin)

admin.site.unregister(Group)

class IngredientInline(admin.StackedInline):
    model = Ingredient
@admin.register(Ingredient)
class IngredientAdmin(admin.ModelAdmin):
    list_display = ['recipe']

class StepInline(admin.StackedInline):
    model = Steps
@admin.register(Steps)
class StepsAdmin(admin.ModelAdmin):
    list_display = ['recipe']

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ['name','description','time','image']
    inlines =[
        IngredientInline,
        StepInline
    ]