from .models import SocialLinks
from rest_framework.generics import ListCreateAPIView
from .serializers import CreateGetSocialLinkSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
# Create your views here.


class CreateGetSocialLinks(ListCreateAPIView):
    serializer_class = CreateGetSocialLinkSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

    def perform_create(self, serializer):
        return serializer.save(custom_user=self.request.user)

    def get_queryset(self):
        return SocialLinks.objects.all()
