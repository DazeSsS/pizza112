from django.db import models
from django.contrib.auth.models import AbstractUser


class Employee(AbstractUser):
    phone_number = models.CharField(max_length=12)
    role = models.CharField(max_length=25)
    first_work_day = models.DateTimeField(blank=True, null=True)
    last_work_day = models.DateTimeField(blank=True, null=True)
    salary = models.PositiveIntegerField(default=0)