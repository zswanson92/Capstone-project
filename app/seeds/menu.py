from app.models import db, Menu, environment, SCHEMA


def seed_menus():
    menu1 = Menu(
        user_id='1', business_id='1', category='wings',
        menu_image='https://www.foodnetwork.com/content/dam/images/food/fullset/2019/2/19/1/FN_Air-Fryer-Chicken-Wings-H_s4x3.jpg'
    )
    menu2 = Menu(
        user_id='2', business_id='2', category='burgers',
        menu_image='https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg'
    )
    menu3 = Menu(
        user_id='2', business_id='2', category='shakes',
        menu_image='https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2020-07-how-to-make-a-milkshake-at-home%2F2020-06-08_AT-K19388'
    )
    menu4 = Menu(
        user_id='3', business_id='3', category='tacos',
        menu_image='https://images.squarespace-cdn.com/content/v1/62c02c884299956115b1c920/1660785894439-RZ7Z4DFE9QT8NEZ2DLBD/plate+of+tacos.jpg?format=2500w'
    )
    menu5 = Menu(
        user_id='4', business_id='4', category='waffles',
        menu_image='https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2020_belgian-style-waffles_16700_760x580.jpg?ext=.jpg'
    )
    menu6 = Menu(
        user_id='5', business_id='5', category='burgers',
        menu_image='https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg'
    )
    menu7 = Menu(
        user_id='6', business_id='6', category='chicken dishes',
        menu_image='https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg'
    )
    menu8 = Menu(
        user_id='1', business_id='7', category='burgers',
        menu_image='https://res.cloudinary.com/sonic-drive-in/image/upload/c_fit,w_600,h_600,dpr_2,f_auto,q_auto/v1616178802/oa_menu/products/menuproduct_burger_bacon-double-cheeseburger.png'
    )
    menu9 = Menu(
        user_id='2', business_id='8', category='steaks',
        menu_image='https://www.tastingtable.com/img/gallery/15-ingredients-that-will-seriously-elevate-your-steak/l-intro-1663169111.jpg'
    )
    menu10 = Menu(
        user_id='3', business_id='9', category='bubble teas',
        menu_image='https://www.thespruceeats.com/thmb/_x5cGFh26Ecf32WFCyql4y9OLaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/types-of-bubble-tea-766451-hero-01-a6dca4dd096a4d8abdde1a754766f851.jpg'
    )
    menu11 = Menu(
        user_id='4', business_id='10', category='breakfast',
        menu_image='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/1/25/0/WU0101H_Chicken-Fried-Steak_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387468612321.jpeg'
    )
    menu12 = Menu(
        user_id='5', business_id='11', category='breakfast',
        menu_image='https://www.mrbreakfast.com/breakfast/wp-content/uploads/2013/06/donut_breakfast_sandwich.jpg'
    )
    menu13 = Menu(
        user_id='6', business_id='12', category='drinks',
        menu_image='https://www.allrecipes.com/thmb/raFmDniPXTHjoyq8EKIq_OtgPs4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/221893-vodka-martini-cocktail-3x2-67-c99aaaffa3d944668c9ba336b152c3c0.jpg'
    )
    menu14 = Menu(
        user_id='1', business_id='13', category='ice cream',
        menu_image='https://www.biggerbolderbaking.com/wp-content/uploads/2020/01/2-Ingredient-Ice-cream-Thumbnail-scaled.jpg'
    )
    menu15 = Menu(
        user_id='2', business_id='14', category='donuts',
        menu_image='https://tornadoughalli.com/wp-content/uploads/2022/06/CINNAMON-SUGAR-MINI-DONUTS-2-1.jpg'
    )
    menu16 = Menu(
        user_id='3', business_id='15', category='biscuits',
        menu_image='https://www.allrecipes.com/thmb/PnFhFebmYCEtaITaI1k71caY8nw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/216391-easy-sausage-gravy-and-biscuits-TTV78-3x2-1-c21e8cfb2c524a7b882bd9c5300dadd3.jpg'
    )



    db.session.add(menu1)
    db.session.add(menu2)
    db.session.add(menu3)
    db.session.add(menu4)
    db.session.add(menu5)
    db.session.add(menu6)
    db.session.add(menu7)
    db.session.add(menu8)
    db.session.add(menu9)
    db.session.add(menu10)
    db.session.add(menu11)
    db.session.add(menu12)
    db.session.add(menu13)
    db.session.add(menu14)
    db.session.add(menu15)
    db.session.add(menu16)
    db.session.commit()





# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_menus():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.menus RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM menus")

    db.session.commit()
