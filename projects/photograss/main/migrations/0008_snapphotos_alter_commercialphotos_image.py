# Generated by Django 4.1 on 2022-08-10 08:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_rename_photo_personalphotos_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='SnapPhotos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='snap79pXLscy', max_length=200)),
                ('image', models.ImageField(blank=True, null=True, upload_to='imgs/snap/')),
            ],
        ),
        migrations.AlterField(
            model_name='commercialphotos',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='imgs/commercial/<django.db.models.query_utils.DeferredAttribute object at 0x0000017996327A90>/'),
        ),
    ]
