from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, StringField
from wtforms.validators import DataRequired, ValidationError


class ReviewForm(FlaskForm):
    body = TextAreaField("Review", validators=[DataRequired()])
    stars = IntegerField("Stars", validators=[DataRequired()])
    image_url = StringField("Image URL")
