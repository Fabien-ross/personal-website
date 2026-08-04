from .models import Document
from rest_framework import viewsets
from .serializers import DocumentSerializer


class DocumentViewSet(viewsets.ModelViewSet):
    serializer_class = DocumentSerializer

    def get_queryset(self): # get a set of objects
        language = self.kwargs.get("language")
        doc_type = self.kwargs.get("type")

        return Document.objects.filter(
            type=doc_type,
            translations__language=language,
        ).distinct()

    def get_object(self): # get one particular object
        language = self.kwargs["language"]
        slug = self.kwargs["slug"]

        return Document.objects.get(
            translations__slug=slug,
            translations__language=language,
        )
    
