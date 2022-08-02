from tkinter import SE
from rest_framework import serializers
from .models import Search_Param

class Search_ParamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Search_Param
        fields = ['id', 'search_term', 'quantity']
