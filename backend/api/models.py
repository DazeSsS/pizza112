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
    phone_number = models.CharField(max_length=12)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    

class Delivery(models.Model):
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

    def __str__(self):
        return f'{self.courier.username} - {self.status}'
    

class Product(models.Model):
    # id назначен по умолчанию
    product_name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.product_name


class Order(models.Model):
    date = models.DateField()
    employee = models.ForeignKey(Employee, null=True, on_delete=models.SET_NULL)
    customer = models.ForeignKey(Customer, null=True, on_delete=models.SET_NULL)
    delivery = models.ForeignKey(Delivery, null=True, on_delete=models.SET_NULL)
    address = models.CharField(max_length=255)
    order_due = models.DateTimeField(null=True, blank=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.employee.username} - {self.address}'


class ItemsOrdered(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    amount = models.IntegerField()

    def __str__(self):
        return self.product.product_name
