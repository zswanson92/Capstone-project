from flask import Blueprint, request
from app.models import db, Image, Review
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

image_routes = Blueprint("images", __name__)



def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@image_routes.route("", methods=["POST"])
@login_required
def upload_image():
    if "image_url" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image_url"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)


    if "url" not in upload:

        return upload, 400

    url = upload["url"]

    new_image = Image(user_id=current_user.id, url=url, review_id=request.values['review_id'])
    db.session.add(new_image)
    db.session.commit()

    review = Review.query.filter_by(id=new_image.review_id).first()
    print("can you hear me now??", review)
    review.image_url = new_image.url
    db.session.add(review)
    db.session.commit()

    return {"url": url}


@image_routes.route('/<int:id>', methods=['GET'])
def get_one_image(id):
    image = Image.query.get(id)
    return ({image.id: image.to_dict()})
