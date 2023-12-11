from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import *


class EmployeeSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={"input_type": "password"}, write_only=True, required=True)

    class Meta:
        model = Employee
        fields = '__all__'

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super(EmployeeSerializer, self).create(validated_data)


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


# class OrderSerializer(serializers.ModelSerializer):
#     employee = EmployeeSerializer(many = False)
#     customer = CustomerSerializer(many = False)

#     class Meta:
#         model = Order
#         fields = ['date', 'employee', 'customer', 'delivery', 'address', 'order_due', 'total']


class OrderSerializer(serializers.ModelSerializer):
    employee_first_name = serializers.SerializerMethodField()
    customer_name = serializers.SerializerMethodField()
    employee_last_name = serializers.SerializerMethodField()
    items_count = serializers.SerializerMethodField()
    total = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = [
            'id',
            'status', 
            'delivery_type', 
            'date', 
            'employee_first_name', 
            'employee_last_name', 
            'customer_name', 
            'address', 
            'order_due', 
            'total', 
            'items_count', 
            'courier'
        ]

    def get_employee_first_name(self, obj):
        return obj.employee.first_name if obj.employee else None
    
    def get_employee_last_name(self, obj):
        return obj.employee.last_name if obj.employee else None

    def get_customer_name(self, obj):
        return obj.customer.name if obj.customer else None

    def get_items_count(self, obj):
        return obj.itemsordered_set.aggregate(total_amount=models.Sum('amount'))['total_amount'] or 0
    
    def get_total(self, obj):
        items = obj.itemsordered_set.all()
        return sum(item.amount * item.product.price for item in items)


class ItemsOrderedSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemsOrdered
        fields = '__all__'