# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-11 14:47
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dataform', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ItemModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100, null=True, verbose_name='\u540d\u79f0')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='\u521b\u5efa\u65f6\u95f4')),
                ('icon', models.CharField(blank=True, max_length=200, null=True, verbose_name='\u56fe\u6807')),
                ('description', models.CharField(blank=True, max_length=500, null=True, verbose_name='\u63cf\u8ff0')),
                ('introduction', models.CharField(blank=True, max_length=1000, null=True, verbose_name='\u4ecb\u7ecd')),
                ('url', models.CharField(blank=True, max_length=1000, null=True, verbose_name='\u4e0b\u8f7d\u5730\u5740')),
                ('file_addr', models.CharField(blank=True, max_length=200, null=True, verbose_name='\u9644\u4ef6\u8def\u5f84')),
                ('active', models.BooleanField(default=True, verbose_name='\u53ef\u7528\u72b6\u6001')),
            ],
            options={
                'ordering': ('created',),
                'verbose_name': '\u9879\u76ee\u540d\u79f0',
                'verbose_name_plural': '\u9879\u76ee\u540d\u79f0',
            },
        ),
        migrations.CreateModel(
            name='SubMenuModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100, null=True, verbose_name='\u540d\u79f0')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='\u521b\u5efa\u65f6\u95f4')),
                ('icon', models.CharField(blank=True, max_length=200, null=True, verbose_name='\u56fe\u6807')),
                ('description', models.CharField(blank=True, max_length=500, null=True, verbose_name='\u63cf\u8ff0')),
                ('introduction', models.CharField(blank=True, max_length=1000, null=True, verbose_name='\u4ecb\u7ecd')),
                ('active', models.BooleanField(default=True, verbose_name='\u53ef\u7528\u72b6\u6001')),
            ],
            options={
                'ordering': ('created',),
                'verbose_name': '\u5b50\u83dc\u5355',
                'verbose_name_plural': '\u5b50\u83dc\u5355',
            },
        ),
        migrations.CreateModel(
            name='TopMenuModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100, null=True, verbose_name='\u540d\u79f0')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='\u521b\u5efa\u65f6\u95f4')),
                ('icon', models.CharField(blank=True, max_length=200, null=True, verbose_name='\u56fe\u6807')),
                ('description', models.CharField(blank=True, max_length=500, null=True, verbose_name='\u63cf\u8ff0')),
                ('introduction', models.CharField(blank=True, max_length=1000, null=True, verbose_name='\u4ecb\u7ecd')),
                ('active', models.BooleanField(default=True, verbose_name='\u53ef\u7528\u72b6\u6001')),
            ],
            options={
                'ordering': ('created',),
                'verbose_name': '\u9876\u7ea7\u83dc\u5355',
                'verbose_name_plural': '\u9876\u7ea7\u83dc\u5355',
            },
        ),
        migrations.AddField(
            model_name='submenumodel',
            name='topmenu',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='submenu', to='dataform.TopMenuModel', verbose_name='\u9876\u7ea7\u83dc\u5355'),
        ),
        migrations.AddField(
            model_name='itemmodel',
            name='topmenu',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='item', to='dataform.SubMenuModel', verbose_name='\u5b50\u83dc\u5355'),
        ),
    ]
