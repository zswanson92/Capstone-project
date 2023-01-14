from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, StringField
from wtforms.validators import DataRequired, ValidationError


class MenuForm(FlaskForm):
    category = StringField("Category", validators=[DataRequired()])
    item_name = StringField("Item Name", validators=[DataRequired()])
    description = TextAreaField("Description", validators=[DataRequired()])
    price = IntegerField("Price", validators=[DataRequired()])
    menu_image = StringField("Menu Image", validators=[DataRequired()])
