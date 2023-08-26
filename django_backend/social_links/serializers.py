from rest_framework import serializers
from .models import SocialLinks


class CreateGetSocialLinkSerializer(serializers.ModelSerializer):

    custom_user = serializers.UUIDField(required=False)

    class Meta:
        model = SocialLinks
        fields = ("id", "links", "custom_user", "date_created")
