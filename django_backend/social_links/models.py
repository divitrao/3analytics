from typing import Iterable, Optional
import uuid
from django.forms import ValidationError
from user.models import CustomUser
from django.db import models

# Create your models here.


class SocialLinks(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    links = models.URLField(max_length=500)
    user = models.ForeignKey(
        CustomUser, on_delete=models.PROTECT, name='custom_user')
    date_created = models.DateTimeField(auto_now=True)

    def clean(self) -> None:
        if not self.custom_user.is_superuser:
            raise ValidationError(
                "Only superusers are allowed for the 'custom user' field.")
        return super().clean()

    def save(self, *args, **kwargs) -> None:
        self.clean()
        return super().save(*args, **kwargs)
