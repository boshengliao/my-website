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




class SubMenuModelSerializer(serializers.ModelSerializer):
    menu = serializers.ReadOnlyField(source='menu.name')

    class Meta:
        model = SubMenuModel
        fields = ('url', 'id', 'name', 'description',
                  'introduction', 'menu', 'active')

    def __unicode__(self):
        return '%d: %s' % (self.id, self.name)

class TopMenuModelSerializer(serializers.ModelSerializer):
    # submenu = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    submenu = SubMenuModelSerializer(many=True, read_only=True)

    class Meta:
        model = TopMenuModel
        fields = ('url', 'id', 'name', 'description',
                  'introduction', 'submenu', 'active')