from rest_framework import viewsets
from .models import Document
from .serializers import DocumentSerializer, ContactSerializer
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response


class DocumentViewSet(viewsets.ModelViewSet):
    serializer_class = DocumentSerializer #automatically uses the serializer defined

    def get_queryset(self): # get a set of objects
        #language = self.kwargs["language"] # needed? for the serializer
        doc_type = self.kwargs.get("type")

        return Document.objects.filter(
            type=doc_type,
        ).distinct()

    def get_object(self): # get one specific item
        #language = self.kwargs["language"] # needed? for the serializer
        slug = self.kwargs["slug"]

        return Document.objects.get(
            translations__slug=slug # translations is the related_name and "__" is used to access the slug field of the related DocumentTranslation model
        )


class ContactView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):
        print("CONTACT VIEW APPELÉE")
        serializer = ContactSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=201)
