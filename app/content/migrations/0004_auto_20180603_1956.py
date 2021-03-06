# Generated by Django 2.0.3 on 2018-06-03 19:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0003_pin_map_media'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pin',
            name='pos_x',
            field=models.IntegerField(blank=True, null=True, verbose_name='X position on map'),
        ),
        migrations.AlterField(
            model_name='pin',
            name='pos_y',
            field=models.IntegerField(blank=True, null=True, verbose_name='Y position on map'),
        ),
    ]
