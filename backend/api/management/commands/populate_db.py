from typing import Any
from django.core.management.base import BaseCommand
from django.contrib.auth.hashers import make_password
from api.models import Employee, Customer, Order, Delivery, Product, ItemsOrdered
import datetime

first_day_preset = datetime.datetime(2023, 6, 5, 12, 00, 00)
last_day_preset = datetime.datetime(2024, 6, 5, 12, 00, 00)
due_preset = datetime.datetime(2023, 12, 6, 23, 59, 59)

print("заполнение БД ...")

class Command(BaseCommand):
    def _create_objects(self):
        employee_1 = Employee.objects.create(
            username="rakov",
            password=f"{make_password('kegaboom112')}",
            first_name="Иван",
            last_name="Раков",
            middle_name="Владимирович",
            phone_number="+79592331342",
            role="Управляющий",
            first_work_day=first_day_preset,
            last_work_day=last_day_preset,
            salary=50000
        )

        employee_2 = Employee.objects.create(
            username="tarasenko",
            password=f"{make_password('kegaboom112')}",
            first_name="Владимир",
            last_name="Тарасенко",
            middle_name="",
            phone_number="+79602341343",
            role="Пекарь",
            first_work_day=first_day_preset, last_work_day=last_day_preset,
            salary=30000
        )

        employee_3 = Employee.objects.create(
            username="zorin",
            password=f"{make_password('kegaboom112')}",
            first_name="Иван",
            last_name="Зорин",
            middle_name="",
            phone_number="+79612351344",
            role="Курьер",
            first_work_day=first_day_preset,
            last_work_day=last_day_preset,
            salary=26000
        )

        employee_4 = Employee.objects.create(
            username="volchihin",
            password=f"{make_password('kegaboom112')}",
            first_name="Артём",
            last_name="Волчихин",
            middle_name="",
            phone_number="+79622361345",
            role="Пекарь",
            first_work_day=first_day_preset,
            last_work_day=last_day_preset,
            salary=22000
        )

        employee_5 = Employee.objects.create(
            username="gorshkov",
            password=f"{make_password('kegaboom112')}",
            first_name="Георгий",
            last_name="Горшков",
            middle_name="",
            phone_number="+79622361345",
            role="Курьер",
            first_work_day=first_day_preset,
            last_work_day=last_day_preset,
            salary=27000
        )

        employee_6 = Employee.objects.create(
            username="karamolina",
            password=f"{make_password('kegaboom112')}",
            first_name="Елизавета",
            last_name="Карамолина",
            middle_name="",
            gender="Женский",
            phone_number="+79622361345",
            role="Пекарь",
            first_work_day=first_day_preset,
            last_work_day=last_day_preset,
            salary=18000
        )

        product_1 = Product.objects.create(product_name="pizza112", price=112)
        product_2 = Product.objects.create(product_name="Пицца", price=300)
        product_3 = Product.objects.create(product_name="Сладкие рофланы", price=228)
        product_4 = Product.objects.create(product_name="Кега", price=50)

        customer_1 = Customer.objects.create(phone_number="+79542281337", name="Артем")
        customer_2 = Customer.objects.create(phone_number="+79552291338", name="Иван")
        customer_3 = Customer.objects.create(phone_number="+79562301339", name="Владимир")
        customer_4 = Customer.objects.create(phone_number="+79572311340", name="Елизавета")
        customer_5 = Customer.objects.create(phone_number="+79582321341", name="Георгий")

        delivery_1 = Delivery.objects.create(courier=employee_3, status="delivery")
        delivery_2 = Delivery.objects.create(courier=employee_4, status="cooking")
        delivery_3 = Delivery.objects.create(courier=employee_3, status="cancelled")

        order_1 = Order.objects.create(date=last_day_preset, employee=employee_2, customer=customer_3, delivery=delivery_1, address='ш. Приколов, дом 228, кв.54', order_due=due_preset, total=730)
        order_2 = Order.objects.create(date=last_day_preset, employee=employee_2, customer=customer_2, delivery=delivery_2, address='ул. Мира, дом 32, кв. 204', order_due=due_preset, total=1200)

        items_ordered_1 = ItemsOrdered.objects.create(order=order_1, product=product_2, amount=2)
        items_ordered_2 = ItemsOrdered.objects.create(order=order_2, product=product_4, amount=5)

    def handle(self, *args, **options):
         self._create_objects()

