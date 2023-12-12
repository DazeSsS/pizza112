from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
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


class CurrentEmployee(APIView):
    def get(self, request, employee_id):
        employee = Employee.objects.get(id=employee_id)
        serializer = EmployeeSerializer(employee)
        return Response(serializer.data)


class BakerOrdersList(APIView):
    def get(self, request, baker_id):
        baker = Employee.objects.get(id=baker_id)
        orders = Order.objects.filter(employee=baker)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)


class CourierOrdersList(APIView):
    def get(self, request, courier_id):
        courier = Employee.objects.get(id=courier_id)
        orders = Order.objects.filter(courier=courier)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)