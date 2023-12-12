from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid


class Employee(AbstractUser):
    MALE = 'Мужской'
    FEMALE = 'Женский'
    GENDER_CHOICES = [
        (MALE, 'М'),
        (FEMALE, 'Ж')
    ]

    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, default=MALE)
    middle_name = models.CharField(max_length=25, blank=True, null=True)
    phone_number = models.CharField(max_length=12, blank=True, null=True)
    role = models.CharField(max_length=25)
    first_work_day = models.DateField(blank=True, null=True)
    last_work_day = models.DateField(blank=True, null=True)
    salary = models.PositiveIntegerField(default=0)


class Customer(models.Model):
    phone_number = models.CharField(max_length=12, unique=True)
    name = models.CharField(max_length=50)
    email = models.EmailField(null=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    # id назначен по умолчанию
    product_name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.product_name


class Order(models.Model):
    COMPLETED = "Завершён"
    COOKING = "Готовится"
    CANCELLED = "Отменён"
    DELIVERY = "Доставка"
    STATUS_CHOICES = [
        (COMPLETED, "completed"),
        (COOKING, "cooking"),
        (CANCELLED, "cancelled"),
        (DELIVERY, "delivery"),
    ]
    status = models.CharField(
        max_length=9,
        choices=STATUS_CHOICES,
        default=COOKING,
    )

    PICKUP = "Cамовывоз"
    DELIVERY = "Доставка"
    DELIVERY_TYPE_CHOICES = [
        (PICKUP, "pickup"),
        (DELIVERY, "delivery")
    ]
    delivery_type = models.CharField(
        max_length=9,
        choices=DELIVERY_TYPE_CHOICES,
        default=PICKUP
    )

    date = models.DateField()
    ready_time = models.TimeField(null=True, blank=True)
    delivered_time = models.TimeField(null=True, blank=True)
    employee = models.ForeignKey(Employee, null=True, on_delete=models.SET_NULL, related_name="orders_cooking")
    customer = models.ForeignKey(Customer, null=True, on_delete=models.SET_NULL)
    address = models.CharField(max_length=255)
    order_due = models.DateTimeField(null=True, blank=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    courier = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True, related_name="orders_delivering")
    

    def __str__(self):
        return f'{self.employee.username} - {self.address}'


class ItemsOrdered(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    amount = models.IntegerField()

    def __str__(self):
        return self.product.product_name
