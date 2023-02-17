from .db import db, environment, SCHEMA, add_prefix_for_prod

class Image(db.Model):
    __tablename__ = "images"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    review_id = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    url = db.Column(db.String, nullable=False)

    user = db.relationship("User", back_populates="images")
    # review = db.relationship("Review", back_populates="review_images")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "review_id": self.review_id,
            "url": self.url,
        }

    def __repr__(self):
        return f"{self.user_id}{self.user}"
