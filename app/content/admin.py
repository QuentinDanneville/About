# coding: utf-8

# Libs
from django.contrib import admin
from . import models
from django.db import models as db_models


@admin.register(models.Tag)
class TagsAdmin(admin.ModelAdmin):
    # List
    list_display = ('name', 'slug',)

@admin.register(models.Article)
class ArticleAdmin(admin.ModelAdmin):
    # List
    list_display = ('title', 'slug', 'visible',)
    list_filter = ('title', 'visible',)

@admin.register(models.Pin)
class PinAdmin(admin.ModelAdmin):
    # List
    list_display = ('name', 'visible', 'pos_x', 'pos_y', 'article')
    list_filter = ('article','visible',)

