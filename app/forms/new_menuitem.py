from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, StringField, DecimalField
from wtforms.validators import DataRequired, ValidationError


class MenuItemForm(FlaskForm):
    item_name = StringField("Item Name", validators=[DataRequired()])
    description = TextAreaField("Description", validators=[DataRequired()])
    price = DecimalField("Price", validators=[DataRequired()])
    menu_item_image = StringField("Menu Item Image")
