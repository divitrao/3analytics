from rest_framework import serializers
from .models import SocialLinks


class CreateGetSocialLinkSerializer(serializers.ModelSerializer):

    custom_user = serializers.UUIDField(required=False)

    class Meta:
        model = SocialLinks
        fields = ("id", "links", "custom_user", "date_created")

    def validate(self, attrs):
        request = self.context['request']
        if not request.user.is_superuser:
            raise serializers.ValidationError(
                "you are not authenticated to create links")
        attrs = super().validate(attrs)
        return attrs
