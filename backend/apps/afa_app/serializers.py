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
    translation = serializers.SerializerMethodField()   # automatically calls get_translation
    languages = serializers.SerializerMethodField()   # automatically calls get_languages
    
    class Meta:
        model = Document
        fields = [
            "id",
            "type",
            "published_at",
            "metadata",
            "media",
            "translation",  # adds the 'translation' field
            "languages"   # adds the 'languages' field
        ]

    def get_languages(self, obj):
        return list(obj.translations.values_list("language", flat=True))

    def get_translation(self, obj):
        lang = self.context["view"].kwargs["language"]

        translation = (
            obj.translations.filter(language=lang).first()
            or obj.translations.first()
        )

        if not translation:
            return None

        return DocumentTranslationSerializer(translation).data


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ["email", "message", "created_at"]