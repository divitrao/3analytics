from rest_framework import serializers
from .models import SocialLinks


class CreateGetSocialLinkSerializer(serializers.ModelSerializer):

    # here user is not required as we are validating user from jwt token
    custom_user = serializers.UUIDField(required=False)

    class Meta:
        model = SocialLinks
        fields = ("id", "links", "custom_user", "date_created")
