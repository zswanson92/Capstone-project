from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime


class Menu(db.Model):
    __tablename__ = "menus"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('businesses.id')), nullable=False)
    category = db.Column(db.Text, nullable=False)
    item_name = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    menu_image = db.Column(db.Text, nullable=True)
    # reviews = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    menu_business = db.relationship("Business", back_populates="business_menu")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "category": self.category,
            "item_name": self.item_name,
            "description": self.description,
            "price": self.price,
            "menu_image": self.menu_image
        }
