from django.urls import path
from .views import CreateGetSocialLinks

urlpatterns = [
    path('create-get-social-link/',
         CreateGetSocialLinks.as_view(), name='create_get_social_link'),
]
