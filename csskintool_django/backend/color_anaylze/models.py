from django.db import models

# Create your models here.
class Weapon(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='weapons/')

    def __str__(self) -> str:
        return self.name