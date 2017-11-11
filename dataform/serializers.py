#!/usr/bin/env python
# -*- coding: utf-8 -*-

from rest_framework import serializers
from dataform.models import (Snippet,
                             TopMenuModel,
                             SubMenuModel,
                             ItemModel
                             )


class SnippetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Snippet
        fields = ('id', 'title', 'code', 'linenos', 'language', 'style')


class TopMenuModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = TopMenuModel
        fields = ('id', 'name', 'description',
                  'introduction', 'active')


class SubMenuModelSerializer(serializers.ModelSerializer):
    menu = serializers.ReadOnlyField(source='menu.name')

    class Meta:
        model = SubMenuModel
        fields = ('url', 'id', 'name', 'description',
                  'introduction', 'menu', 'active')
