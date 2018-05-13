# coding: utf-8

# Local deps
from . import models

# Libs
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from django.core.exceptions import ObjectDoesNotExist
from django.utils import timezone

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tag
        fields = ('slug', 'name',)
        read_only_fields = ('slug', 'name',)

class ArticleSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)

    class Meta:
        model = models.Article
        fields = ('slug', 'title', 'subtitle', 'article_date', 'content', 'media', 'tags', )
        read_only_fields = ('slug', 'title', 'subtitle', 'article_date', 'content', 'media', 'tags',)

class PinSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    article = ArticleSerializer()

    class Meta:
        model = models.Pin
        fields = ('id', 'article', 'name', 'pos_x', 'pos_y', 'visible',)
        read_only_fields = ('id', 'article', 'name', 'pos_x', 'pos_y', 'visible',)
