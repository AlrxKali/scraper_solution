from django.db import models

class Search_Param(models.Model):
    search_term = models.CharField(max_length=100)
    quantity = models.IntegerField()
