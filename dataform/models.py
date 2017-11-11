# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.utils.encoding import python_2_unicode_compatible

from django.db import models

# Create your models here.


class Snippet(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    code = models.TextField()
    linenos = models.BooleanField(default=False)
    language = models.CharField(default='python', max_length=100)
    style = models.CharField(default='friendly', max_length=100)

    class Meta:
        ordering = ('created',)


@python_2_unicode_compatible
class TopMenuModel(models.Model):
    name = models.CharField('名称', max_length=100, blank=True, null=True)
    created = models.DateTimeField('创建时间', auto_now_add=True)
    icon = models.CharField('图标', max_length=200, blank=True, null=True)
    description = models.CharField('描述', max_length=500, blank=True, null=True)
    introduction = models.CharField('介绍', max_length=1000, blank=True, null=True)
    active = models.BooleanField('可用状态', default=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '顶级菜单'
        verbose_name_plural = verbose_name
        ordering = ('created',)


@python_2_unicode_compatible
class SubMenuModel(models.Model):
    name = models.CharField('名称', max_length=100, blank=True, null=True)
    created = models.DateTimeField('创建时间', auto_now_add=True)
    icon = models.CharField('图标', max_length=200, blank=True, null=True)
    description = models.CharField('描述', max_length=500, blank=True, null=True)
    introduction = models.CharField('介绍', max_length=1000, blank=True, null=True)
    menu = models.ForeignKey(TopMenuModel, related_name='submenu', verbose_name='顶级菜单', blank=True, null=True)
    active = models.BooleanField('可用状态', default=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '子菜单'
        verbose_name_plural = verbose_name
        ordering = ('created',)


@python_2_unicode_compatible
class ItemModel(models.Model):
    name = models.CharField('名称', max_length=100, blank=True, null=True)
    created = models.DateTimeField('创建时间', auto_now_add=True)
    icon = models.CharField('图标', max_length=200, blank=True, null=True)
    description = models.CharField('描述', max_length=500, blank=True, null=True)
    introduction = models.CharField('介绍', max_length=1000, blank=True, null=True)
    url = models.CharField('下载地址', max_length=1000, blank=True, null=True)
    file_addr = models.CharField('附件路径', max_length=200, blank=True, null=True)
    menu = models.ForeignKey(SubMenuModel, related_name='item', verbose_name='子菜单', blank=True, null=True)
    active = models.BooleanField('可用状态', default=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '项目名称'
        verbose_name_plural = verbose_name
        ordering = ('created',)
