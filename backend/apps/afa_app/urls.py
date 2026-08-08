from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()

urlpatterns = [
    path(
        "contact/",
        views.ContactViewSet.as_view({"post": "create"}),
    ),
    path(
        "docs/<str:language>/<str:type>/",
        views.DocumentViewSet.as_view({"get": "list"}),
    ),
    path(
        "docs/<str:language>/<str:type>/<str:slug>/",
        views.DocumentViewSet.as_view({"get": "retrieve"}),
    )
]
