# Generated by Django 4.2.7 on 2023-12-12 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_customer_email_alter_customer_phone_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='order_delivered_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='order_ready_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]