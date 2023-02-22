from .db import db, environment, SCHEMA, add_prefix_for_prod

class Image(db.Model):
    __tablename__ = "images"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    review_id = db.Column(db.Integer, nullable=True)
    business_id = db.Column(db.Integer, nullable=True)
    menu_id = db.Column(db.Integer, nullable=True)
    menuitem_id = db.Column(db.Integer, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    url = db.Column(db.String, nullable=False)

    user = db.relationship("User", back_populates="images")
    # review = db.relationship("Review", back_populates="review_images")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "review_id": self.review_id,
            "business_id": self.business_id,
            "menu_id": self.menu_id,
            "menuitem_id": self.menuitem_id,
            "url": self.url
        }

    def __repr__(self):
        return f"{self.user_id}{self.user}"
