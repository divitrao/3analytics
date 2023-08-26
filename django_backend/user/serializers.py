from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer as JwtTokenObtainPairSerializer
from django.contrib.auth.password_validation import validate_password
from .models import CustomUser


class TokenObtainPairSerializer(JwtTokenObtainPairSerializer):
    username_field = get_user_model().USERNAME_FIELD


class UserSerializer(serializers.ModelSerializer):
    """
    This serializer is to validate user registration api 

    """
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=CustomUser.objects.all())]
    )
    password = serializers.CharField(
        required=True, validators=[validate_password])

    password2 = serializers.CharField(
        required=True, validators=[validate_password])

    class Meta:
        model = get_user_model()
        fields = ('email', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs


class ChangePasswordSerializer(serializers.Serializer):

    """
    this serializer is to validate the put api for change password and update the users password

    """

    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(
        required=True, validators=[validate_password])
    new_password2 = serializers.CharField(
        required=True, validators=[validate_password])

    def validate(self, attrs):
        attrs = super().validate(attrs)
        request = self.context['request']
        if not request.user.check_password(attrs['old_password']):
            raise serializers.ValidationError("old password dont match")

        if attrs['new_password'] != attrs['new_password2']:
            raise serializers.ValidationError(
                {"password": "New Password fields didn't match."})

        return attrs

    def update(self, instance, validated_data):

        instance.set_password(validated_data['new_password'])
        instance.save()
        return instance
