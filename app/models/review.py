from .db import db, SCHEMA, environment, add_prefix_for_prod
import datetime

useful = db.Table(
    "useful",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"))),
    db.Column("review_id", db.Integer, db.ForeignKey(add_prefix_for_prod("reviews.id")))
)

if environment == "production":
    useful.schema = SCHEMA

funny = db.Table(
    "funny",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"))),
    db.Column("review_id", db.Integer, db.ForeignKey(add_prefix_for_prod("reviews.id")))
)

if environment == "production":
    funny.schema = SCHEMA

cool = db.Table(
    "cool",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"))),
    db.Column("review_id", db.Integer, db.ForeignKey(add_prefix_for_prod("reviews.id")))
)

if environment == "production":
    cool.schema = SCHEMA



class Review(db.Model):

    __table_args__ = {'extend_existing': True}

    __tablename__ = "reviews"



    if environment == "production":
        __table_args__ = { "schema": SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("businesses.id")), nullable=False)
    body = db.Column(db.Text, nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    image_url = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    review_business = db.relationship("Business", back_populates="business_review")
    review_useful = db.relationship("User", secondary=useful, back_populates="user_useful", cascade="all, delete")
    review_funny = db.relationship("User", secondary=funny, back_populates="user_funny", cascade="all, delete")
    review_cool = db.relationship("User", secondary=cool, back_populates="user_cool", cascade="all, delete")
    # review_images = db.relationship("Image", back_populates="review", cascade="all, delete")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "business_id": self.business_id,
            "body": self.body,
            "stars": self.stars,
            "image_url": self.image_url,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "useful": len(self.review_useful),
            "funny": len(self.review_funny),
            "cool": len(self.review_cool)
        }
