from flask import Blueprint, request
from app.models import db, Image, Review, Business, Menu, MenuItem
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
    review.image_url = new_image.url
    db.session.add(review)
    db.session.commit()

    return {"url": url}

@image_routes.route("/business", methods=["POST"])
@login_required
def upload_image_business():
    if "preview_img" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["preview_img"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)


    if "url" not in upload:

        return upload, 400

    url = upload["url"]

    new_image = Image(user_id=current_user.id, url=url, business_id=request.values['business_id'])
    db.session.add(new_image)
    db.session.commit()

    business = Business.query.filter_by(id=new_image.business_id).first()
    print("can you hear me now??", business)
    business.preview_img = new_image.url
    db.session.add(business)
    db.session.commit()

    return {"url": url}


# @image_routes.route('/<int:id>', methods=['GET'])
# def get_one_image(id):
#     image = Image.query.get(id)
#     return ({image.id: image.to_dict()})

@image_routes.route("/review/edit", methods=["POST"])
@login_required
def upload_image_edit():
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
    review.image_url = new_image.url
    db.session.add(review)
    db.session.commit()

    return {"url": url}


@image_routes.route("/business/edit", methods=["POST"])
@login_required
def upload_image_business_edit():
    if "preview_img" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["preview_img"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)


    if "url" not in upload:

        return upload, 400

    url = upload["url"]


    new_image = Image(user_id=current_user.id, url=url, business_id=request.values['business_id'])
    db.session.add(new_image)
    db.session.commit()

    business = Business.query.filter_by(id=new_image.business_id).first()
    business.preview_img = new_image.url
    db.session.add(business)
    db.session.commit()

    return {"url": url}


@image_routes.route("/menu", methods=["POST"])
@login_required
def upload_image_menu():
    if "menu_image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["menu_image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)


    if "url" not in upload:

        return upload, 400

    url = upload["url"]

    new_image = Image(user_id=current_user.id, url=url, menu_id=request.values['menu_id'])
    db.session.add(new_image)
    db.session.commit()

    menu = Menu.query.filter_by(id=new_image.menu_id).first()
    menu.menu_image = new_image.url
    db.session.add(menu)
    db.session.commit()

    return {"url": url}


@image_routes.route("/menu/edit", methods=["POST"])
@login_required
def upload_image_menu_edit():
    if "menu_image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["menu_image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)


    if "url" not in upload:

        return upload, 400

    url = upload["url"]


    new_image = Image(user_id=current_user.id, url=url, menu_id=request.values['menu_id'])
    db.session.add(new_image)
    db.session.commit()

    menu = Menu.query.filter_by(id=new_image.menu_id).first()
    menu.menu_image = new_image.url
    db.session.add(menu)
    db.session.commit()

    return {"url": url}


@image_routes.route("/menuitem", methods=["POST"])
@login_required
def upload_image_menuitem():
    if "menu_item_image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["menu_item_image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)


    if "url" not in upload:

        return upload, 400

    url = upload["url"]

    new_image = Image(user_id=current_user.id, url=url, menuitem_id=request.values['menuitem_id'])
    db.session.add(new_image)
    db.session.commit()

    menuitem = MenuItem.query.filter_by(id=new_image.menuitem_id).first()
    menuitem.menu_item_image = new_image.url
    db.session.add(menuitem)
    db.session.commit()

    return {"url": url}


@image_routes.route("/menuitem/edit", methods=["POST"])
@login_required
def upload_image_menuitem_edit():
    if "menu_item_image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["menu_item_image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)


    if "url" not in upload:

        return upload, 400

    url = upload["url"]

    new_image = Image(user_id=current_user.id, url=url, menuitem_id=request.values['menuitem_id'])
    db.session.add(new_image)
    db.session.commit()

    menuitem = MenuItem.query.filter_by(id=new_image.menuitem_id).first()
    menuitem.menu_item_image = new_image.url
    db.session.add(menuitem)
    db.session.commit()

    return {"url": url}
