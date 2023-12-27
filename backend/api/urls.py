from django.urls import path, include
from rest_framework import routers

from .views import *

urlpatterns = [
    path('orders/', OrdersList.as_view(), name='orders_list'),
    path('orders/<int:order_id>/', CurrentOrder.as_view(), name='current_order'),
    path('orders/create/', CreateOrder.as_view(), name='create_order'),
    path('employee/<int:employee_id>/', CurrentEmployee.as_view(), name='current_employee'),
    path('baker/<int:baker_id>/orders/', BakerOrdersList.as_view(), name='baker_orders_list'),
    path('courier/<int:courier_id>/orders/', CourierOrdersList.as_view(), name='courier_orders_list'),
]