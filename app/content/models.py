from django.db import models

class Tag(models.Model):
    """
    Article type
    """
    # Common informations
    name = models.CharField("Name", max_length=100)
    slug = models.SlugField(unique=True)

    # Timestamp fields
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Article(models.Model):
    """
    Article
    """
    # Common informations
    title = models.CharField("Titre", max_length=255)
    subtitle = models.CharField("Sous titre", max_length=255, null=True, blank=True)
    article_date = models.CharField("Sous titre", max_length=255, null=True, blank=True)
    slug = models.SlugField("URL accès à l'artcle", unique=True)
    content = models.TextField("Contenu", null=True, blank=True)
    media = models.FileField(upload_to="medias")
    visible = models.BooleanField("Publier l'article", default=True, blank=True)
    tags = models.ManyToManyField(Tag)

    # Timestamp fields
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Pin(models.Model):
    """
    Pin on map
    """
    # General informations
    name = models.CharField("PIN name", max_length=200)
    pos_x = models.PositiveIntegerField("X position on map", null=True, blank=True)
    pos_y = models.PositiveIntegerField("Y position on map", null=True, blank=True)
    visible = models.BooleanField("Display on map", default=True, blank=True)

    # Icon
    article = models.ForeignKey("Article", null=True, blank=True, related_name="pins", on_delete=models.CASCADE,)

    # Timestamp fields
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


