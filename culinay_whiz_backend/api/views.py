from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from api.models import Recipe
from api.serializers import RecipeSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework_simplejwt.backends import TokenBackend
from django.http import request
from django.core.exceptions import ValidationError

# Create your views here.
class RecipeViewSet(ModelViewSet):
    queryset =Recipe.objects.all()
    serializer_class= RecipeSerializer
    parser_classes = (MultiPartParser, FormParser)

   

