from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime


class Menu(db.Model):
    __tablename__ = "menus"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    menu_id = db.Column(db.Integer, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('businesses.id')), nullable=False)
    category = db.Column(db.Text, nullable=False)
    menu_image = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    menu_business = db.relationship("Business", back_populates="business_menu")
    menu_menu_item = db.relationship("MenuItem", back_populates='menu_item_menu', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            "id": self.id,
            "menu_id": self.menu_id,
            "user_id": self.user_id,
            "business_id": self.business_id,
            "category": self.category,
            "menu_image": self.menu_image,
            "menu_items": [menu_item.to_dict() for menu_item in self.menu_menu_item]
        }
