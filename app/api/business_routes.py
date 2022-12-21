from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_required
from app.models import Business, db
from app.forms import BusinessForm

business_routes = Blueprint("businesses", __name__)
create_business_route = Blueprint("create", __name__)
# another_business_route = Blueprint("")


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

@business_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_business(id):
    business = Business.query.get(id)
    db.session.delete(business)
    db.session.commit()
    return {"message": "Delete Successful"}



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

@business_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_business(id):
    print("THIS IS id!", id)
    business = Business.query.get(id)

    form = BusinessForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_name = form.data['name']
        new_preview_img = form.data['preview_img']
        # services = form.data['services'],
        new_monday_hours = form.data['monday_hours']
        new_tuesday_hours = form.data['tuesday_hours']
        new_wednesday_hours = form.data['wednesday_hours']
        new_thursday_hours = form.data['thursday_hours']
        new_friday_hours = form.data['friday_hours']
        new_saturday_hours = form.data['saturday_hours']
        new_sunday_hours = form.data['sunday_hours']
        new_phone_number = form.data['phone_number']
        new_email = form.data['email']
        new_address = form.data['address']
        new_business_website = form.data['business_website']
        new_tags = form.data['tags']

        business.name = new_name
        business.preview_img = new_preview_img
        business.monday_hours = new_monday_hours
        business.tuesday_hours = new_tuesday_hours
        business.wednesday_hours = new_wednesday_hours
        business.thursday_hours = new_thursday_hours
        business.friday_hours = new_friday_hours
        business.saturday_hours = new_saturday_hours
        business.sunday_hours = new_sunday_hours
        business.phone_number = new_phone_number
        business.email = new_email
        business.address = new_address
        business.business_website = new_business_website
        business.tags = new_tags

        db.session.commit()
    print("ERRORS!!!!!!", form.errors)
    return business.to_dict()
