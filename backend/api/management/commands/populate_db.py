from typing import Any
from django.core.management.base import BaseCommand
from django.contrib.auth.hashers import make_password
from api.models import Employee, Customer, Order, Product, ItemsOrdered
import datetime

first_day_preset = datetime.date(2023, 6, 5)
last_day_preset = datetime.date(2024, 6, 5)
due_preset = datetime.datetime(2023, 12, 6, 23, 59, 59)
order_ready = datetime.time(17, 23, 11)
order_delivered = datetime.time(18, 37, 12)

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
            is_staff=True,
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

        customer_1 = Customer.objects.create(phone_number="+79542281337", name="Артем", email="megaprikol0@urfu.me")
        customer_2 = Customer.objects.create(phone_number="+79552291338", name="Иван", email="megaprikol1@urfu.me")
        customer_3 = Customer.objects.create(phone_number="+79562301339", name="Владимир", email="megaprikol2@urfu.me")
        customer_4 = Customer.objects.create(phone_number="+79572311340", name="Елизавета", email="megaprikol3@urfu.me")
        customer_5 = Customer.objects.create(phone_number="+79582321341", name="Георгий", email="megaprikol4@urfu.me")

        order_1 = Order.objects.create(
            status="Готовится", 
            delivery_type="Самовывоз", 
            date=last_day_preset, 
            employee=employee_2, 
            customer=customer_3, 
            address='ш. Приколов, дом 228, кв. 54', 
            order_due=due_preset, 
            total=730
        )
        order_2 = Order.objects.create(
            status="Готовится", 
            delivery_type="Доставка", 
            date=last_day_preset, 
            employee=employee_2, 
            customer=customer_2, 
            address='ул. Мира, дом 32, кв. 204', 
            order_due=due_preset, 
            total=1200, 
            courier=employee_3
        )
        order_3 = Order.objects.create(
            status="Завершён",
            ready_time=order_ready,
            delivered_time=order_delivered,
            delivery_type="Доставка", 
            date=last_day_preset, 
            employee=employee_2, 
            customer=customer_2, 
            address='ул. Сериализаторская, дом 1, кв. 2', 
            order_due=due_preset, 
            total=1200, 
            courier=employee_3
        )
        order_4 = Order.objects.create(
            status="Завершён",
            ready_time=order_ready,
            delivered_time=order_delivered,
            delivery_type="Доставка", 
            date=last_day_preset, 
            employee=employee_2, 
            customer=customer_2, 
            address='ул. Нулл, дом 128, кв. 256', 
            order_due=due_preset, 
            total=1200, 
            courier=employee_3
        )
        order_5 = Order.objects.create(
            status="Завершён",
            ready_time=order_ready,
            delivered_time=order_delivered,
            delivery_type="Доставка",
            date=last_day_preset,
            employee=employee_2,
            customer=customer_2,
            address='ул. Нулл, дом 128, кв. 256', 
            order_due=due_preset, 
            total=1200, 
            courier=employee_3
        )

        items_ordered_1 = ItemsOrdered.objects.create(order=order_1, product=product_2, amount=2)
        items_ordered_2 = ItemsOrdered.objects.create(order=order_2, product=product_4, amount=5)
        items_ordered_3 = ItemsOrdered.objects.create(order=order_3, product=product_1, amount=2)
        items_ordered_4 = ItemsOrdered.objects.create(order=order_3, product=product_3, amount=5)
        items_ordered_5 = ItemsOrdered.objects.create(order=order_4, product=product_4, amount=10)

    def handle(self, *args, **options):
         self._create_objects()

