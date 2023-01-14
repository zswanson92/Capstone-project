from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime


class Business(db.Model):
    __tablename__ = "businesses"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name = db.Column(db.Text, nullable=False)
    preview_img = db.Column(db.Text, nullable=True)
    monday_hours = db.Column(db.Text, nullable=False)
    tuesday_hours = db.Column(db.Text, nullable=False)
    wednesday_hours = db.Column(db.Text, nullable=False)
    thursday_hours = db.Column(db.Text, nullable=False)
    friday_hours = db.Column(db.Text, nullable=False)
    saturday_hours = db.Column(db.Text, nullable=False)
    sunday_hours = db.Column(db.Text, nullable=False)
    email = db.Column(db.Text, nullable=False)
    address = db.Column(db.Text, nullable=False)
    phone_number = db.Column(db.Text, nullable=False)
    business_website = db.Column(db.Text, nullable=True)
    about_us = db.Column(db.Text, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    tags = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    business_review = db.relationship("Review", back_populates="review_business", cascade="all, delete-orphan")
    business_user = db.relationship("User", back_populates="user_business")
    business_menu = db.relationship("Menu", back_populates="menu_business", cascade="all, delete-orphan")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'preview_img': self.preview_img,
            'monday_hours': self.monday_hours,
            'tuesday_hours': self.tuesday_hours,
            'wednesday_hours': self.wednesday_hours,
            'thursday_hours': self.thursday_hours,
            'friday_hours': self.friday_hours,
            'saturday_hours': self.saturday_hours,
            'sunday_hours': self.sunday_hours,
            'phone_number': self.phone_number,
            'email': self.email,
            'address': self.address,
            'business_website': self.business_website,
            'about_us': self.about_us,
            'price': self.price,
            'tags': self.tags,
            "user_business": self.business_user.to_dict(),
            "reviews": [review.to_dict() for review in self.business_review],
            "menus": [menu.to_dict() for menu in self.business_menu]
        }
