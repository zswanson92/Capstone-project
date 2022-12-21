from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectMultipleField, SelectField
from wtforms.validators import DataRequired, ValidationError
from app.models import Business

# data = [
#         "{'Service': 'Dine-In}",
#         "{'Service': 'Take Out'}",
#         "{'Service': 'In House Delivery'}",
#         "{'Service': 'Pick Up'}",
#         "{'Service': 'App Based Delivery'}",
#         "{'Service': 'Takes Reservations'}",
#         "{'Service': 'Vegan Friendly'}",
#         "{'Service': 'Gluten Free Friendly'}",
#         "{'Service': 'Keto Friendly'}",
#     ]

data = [
        "Dine-In",
        "Take Out",
        "In House Delivery",
        "Pick Up",
        "App Based Delivery",
        "Takes Reservations",
        "Vegan Friendly",
        "Gluten Free Friendly",
        "Keto Friendly"
    ]

# ["Dine-In", "Take Out", "In House Delivery", "Pick Up", "App Based Delivery", "Takes Reservations", "Vegan Friendly", "Gluten Free Friendly", "Keto Friendly"]

class BusinessForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    preview_img = StringField("Preview Image")
    services = SelectField("Services", choices=["Pick Up", "Take Out", "In House Delivery"])
    monday_hours = StringField("Monday Hours", validators=[DataRequired()])
    tuesday_hours = StringField("Tuesday Hours", validators=[DataRequired()])
    wednesday_hours = StringField("Wednesday Hours", validators=[DataRequired()])
    thursday_hours = StringField("Thursday Hours", validators=[DataRequired()])
    friday_hours = StringField("Friday Hours", validators=[DataRequired()])
    saturday_hours = StringField("Saturday Hours", validators=[DataRequired()])
    sunday_hours = StringField("Sunday Hours", validators=[DataRequired()])
    # contact_info = TextAreaField("Contact Info", validators=[DataRequired()])
    phone_number = StringField("Phone Number", validators=[DataRequired()])
    email = StringField("Email", validators=[DataRequired()])
    address = StringField("Address", validators=[DataRequired()])
    business_website = StringField("Business Website")
    tags = StringField("Tags")
