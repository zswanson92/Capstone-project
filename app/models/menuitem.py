from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime


class MenuItem(db.Model):
    __tablename__ = "menuitems"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    # business_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('businesses.id')), nullable=False)
    menu_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('menus.id')), nullable=False)
    item_name = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    menu_item_image = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    menu_item_menu = db.relationship("Menu", back_populates="menu_menu_item")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            # "business_id": self.business_id,
            "menu_id": self.menu_id,
            "item_name": self.item_name,
            "description": self.description,
            "price": self.price,
            "menu_item_image": self.menu_item_image,
            # "menu_image": self.menu_image
        }
