from django.urls import include, path
from django.contrib import admin
from rest_framework import routers

from . import views

router = routers.DefaultRouter()

urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "api/docs/<str:language>/<str:type>/",
        views.DocumentViewSet.as_view({"get": "list"}),
    ),
    path(
        "api/docs/<str:language>/<str:type>/<str:slug>/",
        views.DocumentViewSet.as_view({"get": "retrieve"}),
    ),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
