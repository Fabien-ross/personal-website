import uuid
from django.db import models
from django.utils.text import slugify

class Document(models.Model):

    class DocumentType(models.TextChoices):
        POEM = "poems", "Poems"
        ESSAY = "essays", "Essays"
        QUOTE = "quotes", "Quotes"
        COMMENTARY = "commentarys", "Commentarys"
        NOVEL = "novels", "Novels"
        MUSIC = "musics", "Musics"
        GRAPHIC = "graphic", "Graphic"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type = models.CharField(max_length=50, choices=DocumentType.choices)
    published_at = models.DateTimeField(null=True, blank=True)
    media = models.CharField(
        max_length=50,
        blank=True,
    )
    metadata = models.JSONField(default=dict, blank=True)


class DocumentTranslation(models.Model):

    # Subclass for language choices
    class Language(models.TextChoices):
        FR = "fr", "French"
        EN = "en", "English"
    
    # Ensure that each translation is linked to a document and disappear when the document is deleted
    document = models.ForeignKey(
        Document,
        related_name="translations",
        on_delete=models.CASCADE,
    )

    # Translation Fields
    language = models.CharField(max_length=2, choices=Language.choices)
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, editable=False) # the slug is edited only through automatic generation
    content = models.TextField()
    summary = models.TextField(blank=True, null=True)
    lang_metadata = models.JSONField(default=dict, blank=True)

    # Slug generation
    def generate_unique_slug(self):
        base = slugify(self.title)
        slug = base
        i = 2

        while DocumentTranslation.objects.filter(slug=slug).exclude(pk=self.pk).exists():
            slug = f"{base}-{i}"
            i += 1

        return slug
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self.generate_unique_slug()
        super().save(*args, **kwargs)


    # Constraints
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["document", "language"], # only one translation per language per document
                name="unique_translation_per_language",
            ),
            models.UniqueConstraint(
                fields=["language", "slug"], # unique slug per language across all documents
                name="unique_slug_per_language",
            ),
        ]

class Contact(models.Model):

    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
