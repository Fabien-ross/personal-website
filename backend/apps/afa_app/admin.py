from django.contrib import admin

from .models import Document, DocumentTranslation


class DocumentTranslationInline(admin.TabularInline):
    model = DocumentTranslation
    extra = 1

@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    inlines = [DocumentTranslationInline]