#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf.urls import url, include

from . import views

urlpatterns = [
    url(r'^snippets/$', views.snippet_list, name="snippet_list"),
    url(r'^snippets/(?P<pk>[0-9]+)/$', views.snippet_detail, name='snippet_detail'),
]
