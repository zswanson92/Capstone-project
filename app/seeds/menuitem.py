from app.models import db, MenuItem, environment, SCHEMA


def seed_menuitems():
    mi1 = MenuItem(
        user_id='1', menu_id='1', item_name='lemon pepper', description='Our most popular wing flavor with in house seasoning mix.', price=10.99,
        menu_item_image='https://www.spendwithpennies.com/wp-content/uploads/2022/02/Lemon-Pepper-Wings-SpendWithPennies-13.jpg'
    )
    mi2 = MenuItem(
        user_id='1', menu_id='1', item_name='flaming hot', description='Very spicy wings with in house seasoning mix.', price=11.99,
        menu_item_image='https://gimmedelicious.com/wp-content/uploads/2021/08/Hot-Spicy-Baked-Buffalo-Chicken-Wings-2.jpg'
    )
    mi3 = MenuItem(
        user_id='2', menu_id='2', item_name='Whopper', description='Our flagship burger. 2 Large fresh beef patties with all the fixins.', price=8.99,
        menu_item_image='https://people.com/thmb/pnUCFAp_huTRq-F6qpwjkKayxzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/Whoppers-Birthday-PR-Image1-855697cd5f264ec09307d0f349d60a74.jpg'
    )
    mi4 = MenuItem(
        user_id='2', menu_id='2', item_name='Rodeo burger', description='Single patty with onion rings and bbq sauce.', price=2.50,
        menu_item_image='https://www.chewboom.com/wp-content/uploads/2021/09/Burger-King-Adds-Rodeo-Burger-To-The-1-Your-Way-Menu.jpg'
    )
    mi5 = MenuItem(
        user_id='2', menu_id='3', item_name='Strawberry shake', description='One 16oz milkshake made with real ice cream!', price=4.50,
        menu_item_image='https://www.oliviascuisine.com/wp-content/uploads/2021/06/strawberry-milkshake.jpg'
    )
    mi6 = MenuItem(
        user_id='2', menu_id='3', item_name='Oreo shake', description='One 16oz milkshake made with real ice cream and oreo pieces!', price=5.50,
        menu_item_image='https://yummynotes.net/wp-content/uploads/2021/06/Homemade-Oreo-Milkshake.jpg'
    )
    mi7 = MenuItem(
        user_id='3', menu_id='4', item_name='Pastor Taco', description='In house slow cooked pork marinated with pineapple', price=1.90,
        menu_item_image='https://www.dinneratthezoo.com/wp-content/uploads/2019/04/tacos-al-pastor-6.jpg'
    )
    mi8 = MenuItem(
        user_id='3', menu_id='4', item_name='Carnitas Taco', description='In house slow cooked pork', price=1.80,
        menu_item_image='https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Carnitas-Tacos-2.jpg'
    )
    mi9 = MenuItem(
        user_id='4', menu_id='5', item_name='Chicken & Waffles', description='Two thick and fluffy belgian waffles with 3 strips of chicken. Served with syrup and butter.', price=14.99,
        menu_item_image='https://keviniscooking.com/wp-content/uploads/2022/04/Chicken-and-Waffles-Recipe-square.jpg'
    )
    mi10 = MenuItem(
        user_id='4', menu_id='5', item_name='Stack of waffles', description='Three thick and fluffy belgian waffles. Served with syrup and butter.', price=11.99,
        menu_item_image='https://www.tasteandtellblog.com/wp-content/uploads/2020/01/Best-Waffle-Recipe-tasteandtellblog.com-4.jpg'
    )
    mi11 = MenuItem(
        user_id='5', menu_id='6', item_name='Lettuce wrapped burger', description='Thick and juicy beef patty with tomatos, onions and cheese wrapped in lettuce.', price=12.45,
        menu_item_image='https://getinspiredeveryday.com/wp-content/uploads/2022/04/In-and-Out-Burger-Lettuce-Wraps-Get-Inspired-Everyday-16.jpg'
    )
    mi12 = MenuItem(
        user_id='5', menu_id='6', item_name='Chicken burger', description='Thick and juicy chicken patty with tomatos, lettuce and mayo.', price=13.45,
        menu_item_image='https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/chicken-burger-recipe-500x500.jpg'
    )
    mi13 = MenuItem(
        user_id='6', menu_id='7', item_name='Butter chicken', description='Slow cooked and tender chicken marinated in a creamy butter sauce. Served with naan and rice.', price=10.75,
        menu_item_image='https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg'
    )
    mi14 = MenuItem(
        user_id='6', menu_id='7', item_name='Tandoori chicken skewers', description='Slow cooked and tender chicken with tandoori flavoring served on wooden skewers. Comes with veggies.', price=12.00,
        menu_item_image='https://simshomekitchen.com/wp-content/uploads/2022/04/Tandoori-skewers-1.png'
    )
    mi15 = MenuItem(
        user_id='1', menu_id='8', item_name='Single cheeseburger', description='Single patty cheeseburger. Served with pickles, onions, tomato and lettuce.', price=6.33,
        menu_item_image='https://www.braums.com/wp-content/uploads/2018/04/Cheeseburgers-1.jpg'
    )
    mi16 = MenuItem(
        user_id='1', menu_id='8', item_name='Double bacon cheeseburger', description='Double patty cheeseburger. Served with bacon, pickles, onions, tomato and lettuce.', price=9.33,
        menu_item_image='https://res.cloudinary.com/sonic-drive-in/image/upload/c_fit,w_600,h_600,dpr_2,f_auto,q_auto/v1616178802/oa_menu/products/menuproduct_burger_bacon-double-cheeseburger.png'
    )
    mi17 = MenuItem(
        user_id='2', menu_id='9', item_name='12 oz Ribeye', description='Fresh cut, juicy steak. Available rare, medium rare, medium and well done.', price=17.99,
        menu_item_image='https://homshop.app/wp-content/uploads/2019/07/RIB-EYE-CBA-12OZ.png'
    )
    mi18 = MenuItem(
        user_id='2', menu_id='9', item_name='steak bites', description='Fresh cut, juicy steak served in cube form. Available in medium and well done.', price=15.99,
        menu_item_image='https://www.savorynothings.com/wp-content/uploads/2022/02/steak-bites-recipe-image-sq.jpg'
    )
    mi19 = MenuItem(
        user_id='3', menu_id='10', item_name='Taro Milk tea', description='Taro flavored milk tea. Subtly sweet with hints of vanilla. May add tapioca pearls.', price=6.99,
        menu_item_image='https://www.foodandwine.com/thmb/pYz-Ef6P46Tho4MJotrw-Aqok6U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taro-bubble-tea-XL-RECIPE0316-6a4d5b49afcd41ab8ea6b5ef5805858a.jpg'
    )
    mi20 = MenuItem(
        user_id='3', menu_id='10', item_name='Strawberry blended tea', description='Strawberry flavored blended milk tea, similar to a smoothie. May add tapioca pearls or jellies.', price=7.99,
        menu_item_image='https://www.inkatrinaskitchen.com/wp-content/uploads/2020/05/Strawberry-Bubble-Tea-24-wm-600.jpg'
    )
    mi21 = MenuItem(
        user_id='4', menu_id='11', item_name='chicken fried steak', description='Fresh fried hand pounded flank steak smothered in gravy and served with a side of home fries.', price=15.99,
        menu_item_image='https://www.thechunkychef.com/wp-content/uploads/2021/06/Chicken-Fried-Steak-recipe-card.jpg'
    )
    mi22 = MenuItem(
        user_id='4', menu_id='11', item_name='veggie ommelette', description='3 egg ommelette with fresh mushrooms, tomatoes, spinach, red bell peppers and cheedar cheese. Served with a side of home fries.', price=13.99,
        menu_item_image='https://images-gmi-pmc.edge-generalmills.com/ab0d7c52-438b-4d8a-bcba-7d5eb18ee892.jpg'
    )
    mi23 = MenuItem(
        user_id='5', menu_id='12', item_name='donut breakfast sandwich', description='Sausage, egg, cheese and bacon breakfast sandwich served with a donut bun. Not for the faint of heart!!', price=13.00,
        menu_item_image='https://www.kleinworthco.com/wp-content/uploads/2017/08/Bacon-Egg-Cheese-Breakfast-Donut-950.jpg'
    )
    mi24 = MenuItem(
        user_id='5', menu_id='12', item_name='fruity pebble pancakes', description='stack of 5 pancakes infused with fruity pebbles and served with a vanilla glaze as well as fresh fruity pebbles on top.', price=12.00,
        menu_item_image='https://www.courtneyssweets.com/wp-content/uploads/2017/08/fruity-pebble-pancakes-4.jpg'
    )
    mi25 = MenuItem(
        user_id='6', menu_id='13', item_name='Martini', description='Served extra dry, using premium gin. 3 olives.', price=13.45,
        menu_item_image='https://www.foodandwine.com/thmb/OULvOrbb2u-i4d1crmP8MjV3a9Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freezer-martini-FT-RECIPE1221-b586701d77f447188f5f1a8d1dbd7606.jpg'
    )
    mi26 = MenuItem(
        user_id='6', menu_id='13', item_name='Bloody Mary', description='Served with bacon, celery, shrimp, jalpenos, green beans and an olive/pickle skewer.', price=15.45,
        menu_item_image='https://www.bhg.com/thmb/hOi3y8hR80GXSg7O6iZ34ykU2Kc=/1244x0/filters:no_upscale():strip_icc()/bloody-mary-mix-RU272432-844ec68c28e5457c8f26c1edbcf7f20f.jpg'
    )
    mi27 = MenuItem(
        user_id='1', menu_id='14', item_name='Chocolate ice cream', description='Three different chocolates swirled together in our in house special chocolate flavor.', price=17.45,
        menu_item_image='https://www.thespruceeats.com/thmb/T_Mru3-k0Zl9fqDaprCn2bjhek4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-chocolate-ice-cream-recipe-1945798-hero-01-45d9f26a0aaf4c1dba38d7e0a2ab51e2.jpg'
    )
    mi28 = MenuItem(
        user_id='1', menu_id='14', item_name='Maple ice cream', description='Our unique take on the popular donut combination with crispy bacon and chunks of maple frosting swirled inside.', price=17.45,
        menu_item_image='https://carolinapride.com/wp-content/uploads/2015/08/Maple-Bacon-Ice-Cream-1.jpg'
    )
    mi29 = MenuItem(
        user_id='2', menu_id='15', item_name='Cinnamon Sugar donuts', description='A dozen of our specialty miniature donuts covered in a cinnamon sugar mixture.', price=12.00,
        menu_item_image='https://tornadoughalli.com/wp-content/uploads/2022/06/CINNAMON-SUGAR-MINI-DONUTS-2-1.jpg'
    )
    mi30 = MenuItem(
        user_id='2', menu_id='15', item_name='Nutella donuts', description='A dozen of our specialty miniature donuts with a swirl of nutella in the center.', price=12.00,
        menu_item_image='https://celebratingsweets.com/wp-content/uploads/2016/06/Nutella-Stuffed-Cinnamon-Sugar-Donut-Holes-10.jpg'
    )
    mi31 = MenuItem(
        user_id='3', menu_id='16', item_name='Biscuits and gravy', description='In house fresh extra large biscuits doused in a white sausage gravy. Comes with a side of hashbrowns.', price=14.25,
        menu_item_image='https://carlsbadcravings.com/wp-content/uploads/2022/06/homemade-biscuits-and-gravy-recipe-11-500x375.jpg'
    )
    mi32 = MenuItem(
        user_id='3', menu_id='16', item_name='Biscuit breakfast sandwich', description='A sausage and egg patty with a slice of american cheese house in between our house made, fresh, extra large biscuits. Comes with a side of hashbrowns.', price=15.25,
        menu_item_image='https://catzinthekitchen.com/wp-content/uploads/2022/03/Sausage-Egg-and-Cheese-Biscuits-9.jpg'
    )








    db.session.add(mi1)
    db.session.add(mi2)
    db.session.add(mi3)
    db.session.add(mi4)
    db.session.add(mi5)
    db.session.add(mi6)
    db.session.add(mi7)
    db.session.add(mi8)
    db.session.add(mi9)
    db.session.add(mi10)
    db.session.add(mi11)
    db.session.add(mi12)
    db.session.add(mi13)
    db.session.add(mi14)
    db.session.add(mi15)
    db.session.add(mi16)
    db.session.add(mi17)
    db.session.add(mi18)
    db.session.add(mi19)
    db.session.add(mi20)
    db.session.add(mi21)
    db.session.add(mi22)
    db.session.add(mi23)
    db.session.add(mi24)
    db.session.add(mi25)
    db.session.add(mi26)
    db.session.add(mi27)
    db.session.add(mi28)
    db.session.add(mi29)
    db.session.add(mi30)
    db.session.add(mi31)
    db.session.add(mi32)
    db.session.commit()





# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_menuitems():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.menuitems RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM menuitems")

    db.session.commit()
