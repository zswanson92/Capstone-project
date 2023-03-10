from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .review import useful, cool, funny


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    fullname = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    images = db.relationship("Image", back_populates="user", cascade="all, delete")
    user_business = db.relationship("Business", back_populates="business_user")
    user_useful = db.relationship("Review", secondary=useful, back_populates="review_useful", cascade="all, delete")
    user_funny = db.relationship("Review", secondary=funny, back_populates="review_funny", cascade="all, delete")
    user_cool = db.relationship("Review", secondary=cool, back_populates="review_cool", cascade="all, delete")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'fullname': self.fullname,
            'email': self.email
        }
