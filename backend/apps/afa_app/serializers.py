from .models import Document, DocumentTranslation
from rest_framework import serializers

class DocumentTranslationSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentTranslation
        fields = [
            "language",
            "title",
            "slug",
            "content",
        ]

class DocumentSerializer(serializers.ModelSerializer):
    translation = serializers.SerializerMethodField()   # define the 'translation' field
    metadata = serializers.SerializerMethodField()      # used here to add the slug of the other language (for the frontend language switcher)

    class Meta:
        model = Document
        fields = [
            "id",
            "type",
            "published_at",
            "metadata",
            "translation",  # adds the 'translation' field
        ]

    def get_translation(self, obj): # the name of the function is important: gets the 'translation' field for
        lang = self.context["view"].kwargs["language"] # context object (contains, view, request, etc.)

        return DocumentTranslationSerializer( # the content of the translation field
            obj.translations.get(language=lang)
        ).data

    def get_metadata(self, obj):
        metadata = (obj.metadata or {}).copy()

        lang = self.context["view"].kwargs["language"]
        alternate_language = "en" if lang == "fr" else "fr"

        alternate_translation = obj.translations.filter(
            language=alternate_language
        ).first()

        metadata["alternateSlug"] = (
            alternate_translation.slug
            if alternate_translation
            else None
        )

        return metadata
