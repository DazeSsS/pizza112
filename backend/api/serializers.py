from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import *
from datetime import datetime


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CreateOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    employee_first_name = serializers.SerializerMethodField()
    customer_name = serializers.SerializerMethodField()
    customer_phone_number = serializers.SerializerMethodField()
    customer_email = serializers.SerializerMethodField()
    employee_last_name = serializers.SerializerMethodField()
    items_count = serializers.SerializerMethodField()
    total = serializers.SerializerMethodField()
    courier_first_name = serializers.SerializerMethodField()
    courier_last_name = serializers.SerializerMethodField()
    courier_phone_number = serializers.SerializerMethodField()
    items_in_order = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = [
            'id',
            'status', 
            'delivery_type', 
            'date', 
            'employee_first_name', 
            'employee_last_name', 
            'customer_phone_number',
            'customer_name', 
            'customer_email',
            'address', 
            'order_due', 
            'total', 
            'items_count', 
            'courier_first_name',
            'courier_last_name',
            'courier_phone_number',
            'items_in_order',
            'ready_time',
            'delivered_time'
        ]

    def get_employee_first_name(self, obj):
        return obj.employee.first_name if obj.employee else None
    
    def get_employee_last_name(self, obj):
        return obj.employee.last_name if obj.employee else None

    def get_customer_name(self, obj):
        return obj.customer.name if obj.customer else None
    
    def get_customer_phone_number(self, obj):
        return obj.customer.phone_number if obj.customer else None
    
    def get_customer_email(self, obj):
        return obj.customer.email if obj.customer else None

    def get_items_count(self, obj):
        return obj.itemsordered_set.aggregate(total_amount=models.Sum('amount'))['total_amount'] or 0
    
    def get_total(self, obj):
        items = obj.itemsordered_set.all()
        return sum(item.amount * item.product.price for item in items)
    
    def get_courier_first_name(self, obj):
        return obj.courier.first_name if obj.courier else None
    
    def get_courier_last_name(self, obj):
        return obj.courier.last_name if obj.courier else None
    
    def get_courier_phone_number(self, obj):
        return obj.courier.phone_number if obj.courier else None
    
    def get_items_in_order(self, obj):
        items = obj.itemsordered_set.all()
        return [f'{item.product.product_name} - {item.amount}' for item in items]


class ItemsOrderedSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemsOrdered
        fields = '__all__'


class EmployeeSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={"input_type": "password"}, write_only=True, required=True)
    age = serializers.SerializerMethodField()
    class Meta:
        model = Employee
        fields = [
            'id',
            'username',
            'password',
            'first_name',
            'middle_name',
            'last_name',
            'gender',
            'is_staff',
            'role',
            'email',
            'phone_number',
            'first_work_day',
            'last_work_day',
            'salary',
            'age',
            'birth_date'
        ]

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super(EmployeeSerializer, self).create(validated_data)
    
    def get_age(self, obj):
        if obj.birth_date:
            today = datetime.now()
            age = today.year - obj.birth_date.year - ((today.month, today.day) < (obj.birth_date.month, obj.birth_date.day))
            return age
        return None