from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_required
from app.models import Review, db, User
from app.forms import ReviewForm

review_routes = Blueprint("reviews", __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@review_routes.route("", methods=["POST"])
@login_required
def add_review():

    """
    Presents a form to create a review
    """

    form = ReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = Review(
        business_id = request.business_id,
        user_id = current_user.id,
        body = form.data['body'],
        stars = form.data['stars'],
        image_url = form.data['image_url']
        )

        db.session.add(review)
        db.session.commit()
        return review.to_dict()

    print("REVIEW FORM ERRORS!@!", form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
