from .models import Document
from rest_framework import viewsets
from .serializers import DocumentSerializer


class DocumentViewSet(viewsets.ModelViewSet):
    serializer_class = DocumentSerializer

    def get_queryset(self): # get a set of objects
        language = self.kwargs.get("language") # needed for the serializer
        doc_type = self.kwargs.get("type")

        return Document.objects.filter(
            type=doc_type,
        ).distinct()

    def get_object(self): # get one specific item
        language = self.kwargs["language"] # needed for the serializer
        slug = self.kwargs["slug"]

        return Document.objects.get(
            translations__slug=slug
        )
    
