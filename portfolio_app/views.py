from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Project, ContactMessage
from .serializers import ProjectSerializer, ContactMessageSerializer


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer