# coding: utf8

# Local deps
from . import models, serializers

# Libs
## Django
from django.db.models import Q
from django.core.exceptions import ObjectDoesNotExist
## Rest FW
from rest_framework import viewsets, status, permissions, mixins
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError

class PinViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    """
    Retrieve pins
    """
    queryset = models.Pin.objects.filter(visible=True).all()
    serializer_class = serializers.PinSerializer
    model = models.Pin


class ArticleViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    """
    Retrieve articles
    """
    queryset = models.Article.objects.filter(visible=True).all()
    serializer_class = serializers.ArticleSerializer
    model = models.Article
    lookup_field = 'slug'
    lookup_value_regex = '[0-9a-z\-_]+'