from django.urls import path

from . import views

urlpatterns = [
    # example url
    path("test/", views.test, name="test"),
]