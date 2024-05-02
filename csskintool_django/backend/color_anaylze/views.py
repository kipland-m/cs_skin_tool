# views.py
from django.shortcuts import render
from rest_framework import viewsets
from .models import Weapon
from .serializers import WeaponSerializer

class WeaponViewSet(viewsets.ModelViewSet):
    queryset = Weapon.objects.all()
    serializer_class = WeaponSerializer
