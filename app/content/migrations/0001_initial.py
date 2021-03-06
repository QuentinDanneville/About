# Generated by Django 2.0.3 on 2018-05-13 15:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Titre')),
                ('subtitle', models.CharField(blank=True, max_length=255, null=True, verbose_name='Sous titre')),
                ('article_date', models.CharField(blank=True, max_length=255, null=True, verbose_name='Sous titre')),
                ('slug', models.SlugField(unique=True, verbose_name="URL accès à l'artcle")),
                ('content', models.TextField(blank=True, null=True, verbose_name='Contenu')),
                ('media', models.FileField(upload_to='medias')),
                ('visible', models.BooleanField(default=True, verbose_name="Publier l'article")),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Pin',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='PIN name')),
                ('pos_x', models.PositiveIntegerField(blank=True, null=True, verbose_name='X position on map')),
                ('pos_y', models.PositiveIntegerField(blank=True, null=True, verbose_name='Y position on map')),
                ('visible', models.BooleanField(default=True, verbose_name='Display on map')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('article', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='pins', to='content.Article')),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Name')),
                ('slug', models.SlugField(unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.AddField(
            model_name='article',
            name='tags',
            field=models.ManyToManyField(to='content.Tag'),
        ),
    ]
