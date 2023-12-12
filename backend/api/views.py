from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import *
from .models import *


class CustomerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    # permission_classes = [IsAuthenticated]


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # permission_classes = [IsAuthenticated]
    

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    # permission_classes = [IsAuthenticated]
    

class ItemsOrderedViewSet(viewsets.ModelViewSet):
    queryset = ItemsOrdered.objects.all()
    serializer_class = ItemsOrderedSerializer
    # permission_classes = [IsAuthenticated]


# class OrderListViewSet(viewsets.ModelViewSet):
#     queryset = Employee.objects.all()
#     serializer_class = EmployeeSerializer
#     # permission_classes = [IsAuthenticated]


@api_view(['GET'])
def employee_orders(request, employee_id):
    employee = Employee.objects.get(id=employee_id)
    serializer = EmployeeSerializer(employee)
    return Response(serializer.data)


@api_view(['GET'])
def employee_orders_list(request, employee_id):
    employee = Employee.objects.get(id=employee_id)
    orders = Order.objects.filter(employee=employee)
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)
