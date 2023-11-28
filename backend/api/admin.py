from django.contrib import admin

from .models import *


admin.site.register(Employee)
admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(Delivery)
admin.site.register(Product)
admin.site.register(ItemsOrdered)
