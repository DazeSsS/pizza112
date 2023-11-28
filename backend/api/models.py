from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid


class Employee(AbstractUser):
    phone_number = models.CharField(max_length=12)
    role = models.CharField(max_length=25)
    first_work_day = models.DateTimeField(blank=True, null=True)
    last_work_day = models.DateTimeField(blank=True, null=True)
    salary = models.PositiveIntegerField(default=0)


class Customer(models.Model):
    customer_id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True)
    phone_number = models.CharField(max_length=12)
    name = models.CharField(max_length=50)
    

class Delivery(models.Model):
    delivery_id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True)
    courier = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True)
    COMPLETED = "completed"
    COOKING = "cooking"
    CANCELLED = "cancelled"
    DELIVERY = "delivery"
    STATUS_CHOICES = [
        (COMPLETED, "завершен"),
        (COOKING, "готовится"),
        (CANCELLED, "отменен"),
        (DELIVERY, "в доставке"),
    ]
    status = models.CharField(
        max_length=9,
        choices=STATUS_CHOICES,
        default=COOKING,
    )
    

class Product(models.Model):
    # id назначен по умолчанию
    product_name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)


class Order(models.Model):
    order_id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True)
    date = models.DateField()
    employee_id = models.ForeignKey(Employee, null=True, on_delete=models.SET_NULL)
    customer_id = models.ForeignKey(Customer, null=True, on_delete=models.SET_NULL)
    delivery_id = models.ForeignKey(Delivery, null=True, on_delete=models.SET_NULL)
    address = models.CharField(max_length=255)
    order_due = models.DateTimeField(null=True, blank=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)


class ItemsOrdered(models.Model):
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    amount = models.IntegerField()
