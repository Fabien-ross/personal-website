import uuid
from django.db import models


class Document(models.Model):

    class DocumentType(models.TextChoices):
        POEM = "poem", "Poem"
        ESSAY = "essay", "Essay"
        QUOTE = "quote", "Quote"
        COMMENTARY = "commentary", "Commentary"
        NOVEL = "novel", "Novel"
        MUSIC = "music", "Music"
        GRAPHIC = "graphic", "Graphic"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    type = models.CharField(max_length=50, choices=DocumentType.choices)
    content = models.TextField()
    published_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    metadata = models.JSONField(default=dict, blank=True)

    
