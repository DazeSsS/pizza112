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
    path('employee/<int:employee_id>/', CurrentEmployee.as_view(), name='current_employee'),
    path('baker/<int:baker_id>/orders/', BakerOrdersList.as_view(), name='baker_orders_list'),
    path('courier/<int:courier_id>/orders/', CourierOrdersList.as_view(), name='courier_orders_list'),
]