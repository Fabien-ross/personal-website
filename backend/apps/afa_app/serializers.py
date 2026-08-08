from .models import Document, DocumentTranslation, Contact
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
    
    class Meta:
        model = Document
        fields = [
            "id",
            "type",
            "published_at",
            "metadata",
            "media",
            "translation",  # adds the 'translation' field
        ]

    def get_translation(self, obj):
        lang = self.context["view"].kwargs["language"]

        translation = (
            obj.translations.filter(language=lang).first()
            or obj.translations.filter(language="fr").first() #fallback
        )

        if not translation:
            return None

        data = dict(DocumentTranslationSerializer(translation).data)

        # we put alertnateSlug to None if there is no english translation so that the flag disappears in the frontend
        alternate_language = "en" if lang == "fr" or (lang=="en" and translation.language == "fr") else "fr" 

        alternate_translation = obj.translations.filter(
            language=alternate_language
        ).first()

        lang_metadata = dict(translation.lang_metadata or {})

        lang_metadata["alternateSlug"] = (
            alternate_translation.slug
            if alternate_translation
            else None
        )

        data["lang_metadata"] = lang_metadata

        return data


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ["email", "message", "created_at"]