from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_required
from app.models import Review, db, User, Image
from app.forms import ReviewForm

review_routes = Blueprint("reviews", __name__)
edit_route = Blueprint("edit", __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@review_routes.route("", methods=["GET"])
def get_all_reviews():
    reviews = Review.query.all()

    return { review.id: review.to_dict() for review in reviews}


@review_routes.route('/<int:id>', methods=["GET"])
def get_business_reviews(id):
    reviews = Review.query.filter_by(business_id=id).all()
    print("!!!!!!!!!!!", reviews)

    return {review.id: review.to_dict() for review in reviews}


@review_routes.route('/<int:id>/useful', methods=["GET"])
@login_required
def adduseful(id):
    user = User.query.get(current_user.id)

    review = Review.query.get(id)

    for x in review.review_useful:
        # print("!!!!!!!!!!!!!", x.id)
        if user.id == x.id:
            review.review_useful.remove(user)
            db.session.commit()
            return review.to_dict()



    review.review_useful.append(user)
    db.session.commit()
    return review.to_dict()

@review_routes.route('/<int:id>/funny', methods=["GET"])
@login_required
def addfunny(id):
    user = User.query.get(current_user.id)

    review = Review.query.get(id)

    for x in review.review_funny:
        # print("!!!!!!!!!!!!!", x.id)
        if user.id == x.id:
            review.review_funny.remove(user)
            db.session.commit()
            return review.to_dict()



    review.review_funny.append(user)
    db.session.commit()
    return review.to_dict()

@review_routes.route('/<int:id>/cool', methods=["GET"])
@login_required
def addcool(id):
    user = User.query.get(current_user.id)

    review = Review.query.get(id)

    for x in review.review_cool:
        # print("!!!!!!!!!!!!!", x.id)
        if user.id == x.id:
            review.review_cool.remove(user)
            db.session.commit()
            return review.to_dict()



    review.review_cool.append(user)
    db.session.commit()
    return review.to_dict()


# @review_routes.route("", methods=["POST"])
# @login_required
# def add_review():


# @review_routes.route("/businesses/<int:id>", methods=["GET"])
# def get_business_reviews(id):
#     reviews = Review.query.get(id)

#     return {reviews.id: review.to_dict()}
#     """
#     Presents a form to create a review
#     """

#     form = ReviewForm()

#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         review = Review(
#         business_id = request.business_id,
#         user_id = current_user.id,
#         body = form.data['body'],
#         stars = form.data['stars'],
#         image_url = form.data['image_url']
#         )

#         db.session.add(review)
#         db.session.commit()
#         return review.to_dict()

#     print("REVIEW FORM ERRORS!@!", form.errors)
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401
@review_routes.route("/<int:id>", methods=['PUT'])
@login_required
def edit_review(id):

    review = Review.query.get(id)

    form = ReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_body = form.data['body']
        new_stars = form.data['stars']
        # new_image_url = form.data['image_url']

        review.body = new_body
        review.stars = new_stars
        # review.image_url = new_image_url

        db.session.commit()
    print("REVIEW EDIT FORM ERRS!", form.errors)
    return review.to_dict()

@review_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_review(id):
  review = Review.query.get(id)

  db.session.delete(review)
  imageDel = Image.query.filter_by(review_id=id).all()

  if imageDel:
    for x in imageDel:
        db.session.delete(x)

  db.session.commit()
  return {'message': 'Delete Successful'}
