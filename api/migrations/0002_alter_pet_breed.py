# Generated by Django 4.1.2 on 2022-11-19 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pet',
            name='breed',
            field=models.CharField(blank=True, choices=[('Poodle', 'Poodle'), ('German Shepherd', 'German Shepherd'), ('Chihuahua', 'Chihuahua'), ('Mut', 'Mut'), ('Labrador', 'Labrador'), ('Domestic Short Hair', 'Domestic Short Hair'), ('Domestic Long Hair', 'Domestic Long Hair'), ('Siamese', 'Siamese'), ('Russian Blue', 'Russian Blue'), ('Main Coon', 'Main Coon'), ('Fish', 'Fish'), ('Snake', 'Snake'), ('Turtle', 'Turtle'), ('Iguana', 'Iguana'), ('Other', 'OTHER')], max_length=50),
        ),
    ]