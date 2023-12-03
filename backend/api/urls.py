from django.urls import path, include
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register(r'customer', CustomerViewSet)
router.register(r'delivery', DeliveryViewSet)
router.register(r'product', ProductViewSet)
router.register(r'order', OrderViewSet)
router.register(r'items-ordered', ItemsOrderedViewSet)

urlpatterns = [
    path('', include(router.urls))
]