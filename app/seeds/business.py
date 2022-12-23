from app.models import db, Business, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_businesses():
    biz1 = Business(
        user_id=1,
        name='Wingstop 23 Dallas',
        preview_img='https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Wingstop_logo.svg/1200px-Wingstop_logo.svg.png',
        monday_hours="10:00am-9:00pm",
        tuesday_hours="10:00am-9:00pm",
        wednesday_hours="10:00am-9:00pm",
        thursday_hours="10:00am-9:00pm",
        friday_hours="9:00am-11:00pm",
        saturday_hours="9:00am-11:00pm",
        sunday_hours="9:00am-7:00pm",
        email="wingstop@wingstop.com",
        address="1234 nerd ave. Dallas, TX, 75319",
        phone_number="499-321-4459",
        business_website="www.wingstop.com",
        about_us="we sell lots of chicken in a lot of different flavors!, also delicious fries and drinks",
        price=4,
        tags="chicken, fries, sauce"
    )
    biz2 = Business(
        user_id=2,
        name='BK Alaska',
        preview_img='https://mms.businesswire.com/media/20220901005605/en/1559602/23/BK_LOGO_PRIMARY_%C2%AE_ST_RGB%5B1%5D.jpg',
        monday_hours="7:00am-11:00pm",
        tuesday_hours="7:00am-11:00pm",
        wednesday_hours="7:00am-11:00pm",
        thursday_hours="7:00am-11:00pm",
        friday_hours="7:00am-1:00am",
        saturday_hours="7:00am-1:00am",
        sunday_hours="10:00am-8:00pm",
        email="bkburgs@bkburgs.com",
        address="56745 freezing st. Anchorage, AK, 58376",
        phone_number="221-135-3559",
        business_website="www.burgerking.com",
        about_us="we sell lots food that is very fast, and we hate mcdonalds",
        price=1,
        tags="chicken, fries, burgers, milkshakes"
    )
    biz3 = Business(
        user_id=3,
        name='El Burrito Loco',
        preview_img='https://media-cdn.tripadvisor.com/media/photo-s/17/1a/49/09/photo0jpg.jpg',
        monday_hours="11:00am-9:00pm",
        tuesday_hours="11:00am-9:00pm",
        wednesday_hours="11:00am-9:00pm",
        thursday_hours="11:00am-9:00pm",
        friday_hours="10:00am-11:00pm",
        saturday_hours="10:00am-11:00pm",
        sunday_hours="11:00am-7:00pm",
        email="burritoloco@burritoloco.com",
        address="3126 NE 82nd Ave, Portland, OR 97220",
        phone_number="503-252-1343",
        business_website="elburritoloco3.com",
        about_us="we make delicious authentic Mexican food at a reasonable price and offer a drive through!",
        price=2,
        tags="burritos, tacos, traditional, tortas, nachos"
    )

    db.session.add(biz1)
    db.session.add(biz2)
    db.session.add(biz3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_businesses():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.businesses RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM businesses")

    db.session.commit()
