from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_required
from app.models import Business, db, Review, Menu, MenuItem, Image
from app.forms import BusinessForm, ReviewForm, MenuForm, MenuItemForm
# from app.s3_helpers import (
#     upload_file_to_s3, allowed_file, get_unique_filename)


business_routes = Blueprint("businesses", __name__)
create_business_route = Blueprint("create", __name__)
# another_business_route = Blueprint("")
menu_edits = Blueprint("menuedit", __name__)


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

    # ROWS_PER_PAGE = 10
    # page = request.args.get('page', 1, type = int)

    # businesses = Business.query.paginate(page = page, per_page =ROWS_PER_PAGE)

    # paginated_businesses = (businesses.items)
    # print("!!!!!!!!", paginated_businesses)

    # results = [{
    #         'id': business.id,
    #         'user_id': business.user_id,
    #         'name': business.name,
    #         'preview_img': business.preview_img,
    #         'monday_hours': business.monday_hours,
    #         'tuesday_hours': business.tuesday_hours,
    #         'wednesday_hours': business.wednesday_hours,
    #         'thursday_hours': business.thursday_hours,
    #         'friday_hours': business.friday_hours,
    #         'saturday_hours': business.saturday_hours,
    #         'sunday_hours': business.sunday_hours,
    #         'phone_number': business.phone_number,
    #         'email': business.email,
    #         'address': business.address,
    #         'business_website': business.business_website,
    #         'about_us': business.about_us,
    #         'price': business.price,
    #         'tags': business.tags,
    #         "user_business": business.business_user.to_dict(),
    #         # "reviews": [review.to_dict() for review in business.business_review]
    # } for business in paginated_businesses]

    # print(results)
    return { business.id: business.to_dict() for business in businesses}
    # return results



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


    form['csrf_token'].data = request.cookies['csrf_token']



    if form.validate_on_submit():

        business = Business(
            user_id = current_user.id,
            name = form.data['name'],
            preview_img = form.data['preview_img'],
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
            about_us = form.data['about_us'],
            price = form.data['price'],
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
        new_about_us = form.data['about_us']
        new_price = form.data['price']
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
        business.about_us = new_about_us
        business.price = new_price
        business.tags = new_tags

        db.session.commit()
    print("ERRORS!!!!!!", form.errors)
    return business.to_dict()

# @business_routes.route('', methods=["POST"])
# def load_map_key():
#     key = os.environ.get('REACT_APP_GOOGLE_MAPS_API_KEY')
#     return {'googleMapsAPIKey': key}

@create_business_route.route("/<int:id>/reviews", methods=["POST"])
@login_required
def add_review(id):

    """
    Presents a form to create a review
    """
    form = ReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    # print("@@@@@", request)
    # print("request form!!!!!", request.form.getlist('image_url'))
    # print("request files", request.files["image_url"])


    # if "image_url" not in request.files:
    #     return {"errors": "image required"}, 400

    # image = request.files["image_url"]

    # if not allowed_file(image.filename):
    #     return {"errors": "file type not permitted"}, 400

    # image.filename = get_unique_filename(image.filename)

    # upload = upload_file_to_s3(image)

    # if "url" not in upload:
    #     return upload, 400

    # url = upload["url"]
    print("AAAAAAA", form.data['body'])
    print("ZZZZZZZ", form.data['image_url'])

    # print("BBBBBBBBBB", request.form['image_url'])
    print("VVVVVVVVVV", request.json)
    # print("PPPPPPPPPPPPPPP", request.values['image_url'])
    # print("GGHGHHHHHHHHH", request.files['image_url'])
    # image = Image.query.get(id)

    if form.validate_on_submit():
        review = Review(
        business_id = id,
        user_id = current_user.id,
        body = form.data['body'],
        stars = form.data['stars'],

        )

        db.session.add(review)
        db.session.commit()

        return review.to_dict()


    # print("DOES THIS VAL EXIST?", review.id)
    # image = Image.query.filter_by(review_id=review.id).first()
    # print("DIS DA IMAGE STR", image)
    # if image:
    #     review.image_url = image.url
    # db.session.add(review)
    # db.session.commit()

    # return review.to_dict()
    print("REVIEW FORM ERRORS!@!", form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401




@create_business_route.route("/<int:id>/menu", methods=["POST"])
@login_required
def add_menu(id):
    form = MenuForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        menu = Menu(
            business_id = id,
            user_id = current_user.id,
            category = form.data['category'],
            menu_image = form.data['menu_image']
        )

        db.session.add(menu)
        db.session.commit()
        return menu.to_dict()

    print("MENU FORM ERRORS!@@", form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@create_business_route.route("/menu/<int:id>", methods=["POST"])
@login_required
def add_menu_item(id):

    form = MenuItemForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        menuitem = MenuItem(
            menu_id = id,
            user_id = current_user.id,
            item_name = form.data['item_name'],
            description = form.data['description'],
            price = form.data['price'],
            menu_item_image = form.data['menu_item_image']
        )

        db.session.add(menuitem)
        db.session.commit()
        return menuitem.to_dict()

    print("MENU ITEM FORM ERRORS!@", form.errors)

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@business_routes.route('/menu/<int:id>', methods=["DELETE"])
@login_required
def delete_menu(id):

    menu = Menu.query.get(id)
    db.session.delete(menu)
    db.session.commit()
    return {"message": "Delete Successful"}

@business_routes.route('/menu/items/<int:id>', methods=["DELETE"])
@login_required
def delete_menu_item(id):

    menuitem = MenuItem.query.get(id)
    db.session.delete(menuitem)
    db.session.commit()
    return {"message": "Delete Successful"}

@menu_edits.route('/<int:id>', methods=["PUT"])
@login_required
def edit_menu_name(id):

    print("THIS IS ID", id)
    menu = Menu.query.get(id)

    form = MenuForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    # print("!!!!!!!!", form.data['category'])
    if form.validate_on_submit():

            # business_id = id,
            # user_id = current_user.id,
        new_category = form.data['category'],
        new_menu_image = form.data['menu_image']

        # print("^^^^^^^^^^^^^", new_category[0])

        menu.category = new_category[0]

        if(new_menu_image):
            menu.menu_image = new_menu_image





        db.session.add(menu)
        db.session.commit()
        return menu.to_dict()

    print("MENU FORM ERRORS!@@", form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@menu_edits.route('/item/<int:id>', methods=["PUT"])
@login_required
def edit_menuitem(id):

    # print("THIS IS ID", id)
    menuitem = MenuItem.query.get(id)

    form = MenuItemForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

            # business_id = id,
            # user_id = current_user.id,
        # menu_id = id,
        # user_id = current_user.id,
        new_item_name = form.data['item_name'],
        new_description = form.data['description'],
        new_price = form.data['price'],
        new_menu_item_image = form.data['menu_item_image']

        menuitem.item_name = new_item_name[0]
        menuitem.description = new_description[0]
        menuitem.price = new_price[0]
        menuitem.menu_item_image = new_menu_item_image


        db.session.add(menuitem)
        db.session.commit()
        return menuitem.to_dict()

    print("MENU FORM ERRORS!@@", form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
