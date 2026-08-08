from django.contrib import admin

from .models import Document, DocumentTranslation, Contact


class DocumentTranslationInline(admin.TabularInline):
    model = DocumentTranslation
    extra = 1

@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    inlines = [DocumentTranslationInline]

    list_display = (
        "display_title",
        "type",
    )

    search_fields = (
        "translations__title",
        "type",
    )

    def display_title(self, obj):
        translation = obj.translations.filter(language="fr").first()
        return translation.title if translation else "(sans titre)"

    display_title.short_description = "Title"

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    pass