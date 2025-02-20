# Generated by Django 4.1 on 2022-08-10 08:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_snapphotos_alter_commercialphotos_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Snapshot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='snapjduG4fGZ', max_length=200)),
                ('image', models.ImageField(blank=True, null=True, upload_to='imgs/snap/')),
            ],
            options={
                'verbose_name': 'Snapshots',
            },
        ),
        migrations.DeleteModel(
            name='SnapPhotos',
        ),
        migrations.AlterModelOptions(
            name='commercialproject',
            options={'verbose_name': 'Commercial Projects'},
        ),
        migrations.AlterModelOptions(
            name='maincarousel',
            options={'verbose_name': 'Home Slides'},
        ),
        migrations.AlterModelOptions(
            name='mainvideo',
            options={'verbose_name': 'Main Video'},
        ),
        migrations.AlterModelOptions(
            name='personalproject',
            options={'verbose_name': 'Personal Projects'},
        ),
        migrations.AlterField(
            model_name='commercialphotos',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='imgs/commercial/<django.db.models.query_utils.DeferredAttribute object at 0x000001895A857AC0>/'),
        ),
    ]
