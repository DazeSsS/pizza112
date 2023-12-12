from django.urls import path, include
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register(r'customer', CustomerViewSet)
router.register(r'product', ProductViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'items-ordered', ItemsOrderedViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('employee/<int:employee_id>/', employee_orders, name='employee_orders'),
    path('employee/<int:employee_id>/orders/', employee_orders_list, name='employee_orders_list'),
]