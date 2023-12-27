from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .permissions import IsManager, IsOwner
from .serializers import *
from .models import *
    

class OrdersList(ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsManager]


class CurrentOrder(APIView):
    permission_classes = [IsOwner|IsManager]

    def get_object(self, pk):
        order = Order.objects.get(pk=pk)
        self.check_object_permissions(self.request, order)
        return order

    def get(self, request, order_id):
        order = self.get_object(order_id)
        serializer = OrderSerializer(order)
        return Response(serializer.data)
    
    def patch(self, request, order_id):
        order = self.get_object(order_id)
        serializer = CreateOrderSerializer(order, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            
        return Response(serializer.data)


class CreateOrder(APIView):

    def post(self, request):
        serializer = CreateOrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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