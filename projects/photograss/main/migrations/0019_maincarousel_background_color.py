# Generated by Django 4.1 on 2022-08-19 02:51

import colorfield.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0018_alter_commercialphotos_post_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='maincarousel',
            name='background_color',
            field=colorfield.fields.ColorField(default='#FFFFFF', image_field=None, max_length=18, samples=None),
        ),
    ]
