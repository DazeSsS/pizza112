# Generated by Django 4.2.7 on 2023-12-24 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='role',
            field=models.CharField(choices=[('Управляющий', 'manager'), ('Пекарь', 'baker'), ('Курьер', 'courier')], max_length=25),
        ),
    ]
