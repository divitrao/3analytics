import uuid
from user.models import CustomUser
from django.db import models

# Create your models here.


class SocialLinks(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    links = models.URLField(max_length=500)
    user = models.ForeignKey(
        CustomUser, on_delete=models.PROTECT, name='custom_user')
    date_created = models.DateTimeField(auto_now=True)
