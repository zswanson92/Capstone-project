from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_required
from app.models import Business, db
from app.forms import BusinessForm

business_routes = Blueprint("businesses", __name__)
create_business_route = Blueprint("create", __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



@business_routes.route("", methods=["GET"])
def get_all_businesses():
    businesses = Business.query.all()
    return { business.id: business.to_dict() for business in businesses}



@business_routes.route("/<int:id>", methods=["GET"])
def get_specific_business(id):
    business = Business.query.get(id)
    return {business.id: business.to_dict()}



@create_business_route.route("", methods=["POST"])
@login_required
def add_business():
    form = BusinessForm()
    print("THIS IS FORM!!", form)

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        business = Business(
            user_id = current_user.id,
            name = form.data['name'],
            preview_img = form.data['preview_img'],
            # services = form.data['services'],
            monday_hours = form.data['monday_hours'],
            tuesday_hours = form.data['tuesday_hours'],
            wednesday_hours = form.data['wednesday_hours'],
            thursday_hours = form.data['thursday_hours'],
            friday_hours = form.data['friday_hours'],
            saturday_hours = form.data['saturday_hours'],
            sunday_hours = form.data['sunday_hours'],
            phone_number = form.data['phone_number'],
            email = form.data['email'],
            address = form.data['address'],
            business_website = form.data['business_website'],
            tags = form.data['tags']
        )

        db.session.add(business)
        db.session.commit()
        return business.to_dict()

    print("ERRORS!!!!!!", form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
