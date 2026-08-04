from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()

urlpatterns = [
    path(
        "<str:language>/<str:type>/",
        views.DocumentViewSet.as_view({"get": "list"}),
    ),
    path(
        "<str:language>/<str:type>/<str:slug>/",
        views.DocumentViewSet.as_view({"get": "retrieve"}),
    ),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
