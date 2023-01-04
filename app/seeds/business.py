from app.models import db, Business, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_businesses():
    biz1 = Business(
        user_id=1,
        name='Wingstop 23 Dallas',
        preview_img='https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Wingstop_logo.svg/1200px-Wingstop_logo.svg.png',
        monday_hours="10:00am-09:00pm",
        tuesday_hours="10:00am-09:00pm",
        wednesday_hours="10:00am-09:00pm",
        thursday_hours="10:00am-09:00pm",
        friday_hours="09:00am-11:00pm",
        saturday_hours="09:00am-11:00pm",
        sunday_hours="09:00am-07:00pm",
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
        preview_img='https://static-prod.adweek.com/wp-content/uploads/2022/05/BurgerKingPregnancyWhopper.jpg',
        monday_hours="07:00am-11:00pm",
        tuesday_hours="07:00am-11:00pm",
        wednesday_hours="07:00am-11:00pm",
        thursday_hours="07:00am-11:00pm",
        friday_hours="07:00am-01:00am",
        saturday_hours="07:00am-01:00am",
        sunday_hours="10:00am-08:00pm",
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
        monday_hours="11:00am-09:00pm",
        tuesday_hours="11:00am-09:00pm",
        wednesday_hours="11:00am-09:00pm",
        thursday_hours="11:00am-09:00pm",
        friday_hours="10:00am-11:00pm",
        saturday_hours="10:00am-11:00pm",
        sunday_hours="11:00am-07:00pm",
        email="burritoloco@burritoloco.com",
        address="3126 NE 82nd Ave, Portland, OR 97220",
        phone_number="503-252-1343",
        business_website="elburritoloco3.com",
        about_us="we make delicious authentic Mexican food at a reasonable price and offer a drive through!",
        price=2,
        tags="burritos, tacos, traditional, tortas, nachos"
    )
    biz4 = Business(
        user_id=4,
        name='Waffle House',
        preview_img='https://s.hdnux.com/photos/01/23/56/54/21949240/6/ratio3x2_1800.jpg',
        monday_hours="11:00am-10:59am",
        tuesday_hours="11:00am-10:59am",
        wednesday_hours="11:00am-10:59am",
        thursday_hours="11:00am-10:59am",
        friday_hours="11:00am-10:59am",
        saturday_hours="11:00am-10:59am",
        sunday_hours="11:00am-10:59am",
        email="wafflez123@waffle.com",
        address="443 se plaza dr",
        phone_number="877-393-9901",
        business_website="wafflehouse.waffle",
        about_us="We are a 24 hour breakfast chain that offers premium waffles. We've been around since the 70s and work year round to make sure you have access to some great waffles.",
        price=2,
        tags="waffles, breakfast, comfort food, 24 hours"
    )
    biz5 = Business(
        user_id=5,
        name='Moo-Yah',
        preview_img='https://tastychomps.com/wp-content/uploads/2018/10/mooyah-10-gift-card-8-6438182-regular.jpg',
        monday_hours="11:00am-08:00pm",
        tuesday_hours="11:00am-08:00pm",
        wednesday_hours="11:00am-08:00pm",
        thursday_hours="11:00am-08:00pm",
        friday_hours="11:00am-08:00pm",
        saturday_hours="11:00am-08:00pm",
        sunday_hours="11:00am-08:00pm",
        email="moo@yah.com",
        address="2700 Richmond Rd Ste. 3, Texarkana, TX 75503",
        phone_number="903-306-0139",
        business_website="mooyahburgs.com",
        about_us="Counter-serve chain for custom burgers, including poultry & veggie versions, plus fries & shakes.",
        price=3,
        tags="burgers, fries, shakes, vegetarian options"
    )
    biz6 = Business(
        user_id=6,
        name='Taste of India Bar & Grill',
        preview_img='https://txktoday.com/wp-content/uploads/2020/01/TASTE-OF-INDIA.jpg',
        monday_hours="11:00am-08:00pm",
        tuesday_hours="11:00am-08:00pm",
        wednesday_hours="11:00am-08:00pm",
        thursday_hours="11:00am-08:00pm",
        friday_hours="11:00am-09:00pm",
        saturday_hours="11:00am-09:00pm",
        sunday_hours="11:00am-08:00pm",
        email="tasteof@india.com",
        address="4270 St Michael Dr, Texarkana, TX 75503",
        phone_number="903-255-7834",
        business_website="tasteofindia.com",
        about_us="Counter-serve chain for custom burgers, including poultry & veggie versions, plus fries & shakes.",
        price=4,
        tags="indian, vegetarian, dine-in, delivery, take out"
    )
    biz7 = Business(
        user_id=1,
        name='Sonic Drive-In',
        preview_img='https://hips.hearstapps.com/hmg-prod/images/2-1551729230.png',
        monday_hours="06:00am-10:00pm",
        tuesday_hours="06:00am-10:00pm",
        wednesday_hours="06:00am-10:00pm",
        thursday_hours="06:00am-10:00pm",
        friday_hours="06:00am-10:00pm",
        saturday_hours="06:00am-10:00pm",
        sunday_hours="07:00am-10:00pm",
        email="sonicburgies@sonic.com",
        address="3101 Richmond Rd, Texarkana, TX 75503",
        phone_number="903-831-4146",
        business_website="sooonicburger.com",
        about_us="Fast-food burger & fries joint with an old-school feel, including retro drive-in service.",
        price=2,
        tags="burgers, fries, shakes"
    )
    biz8 = Business(
        user_id=2,
        name='Outback Steakhouse',
        preview_img='https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Outback_Steakhouse.svg/1200px-Outback_Steakhouse.svg.png',
        monday_hours="11:00am-02:00pm,04:00PM-11:00PM",
        tuesday_hours="11:00am-02:00pm,04:00PM-11:00PM",
        wednesday_hours="11:00am-02:00pm,04:00PM-11:00PM",
        thursday_hours="11:00am-02:00pm,04:00PM-11:00PM",
        friday_hours="11:00am-02:00pm,04:00PM-11:00PM",
        saturday_hours="11:00am-02:00pm,04:00PM-11:00PM",
        sunday_hours="11:00am-02:00pm,04:00PM-11:00PM",
        email="sonicburgies@sonic.com",
        address="3209 Mall Dr, Texarkana, TX 75503",
        phone_number="903-831-4252",
        business_website="outbacksteakz.com",
        about_us="Boisterous Australian-themed chain serving steaks, seafood & other hearty steakhouse fare.",
        price=4,
        tags="steaks, fries, appetizers"
    )
    biz9 = Business(
        user_id=3,
        name='Eden Bubble Tea',
        preview_img='https://fastly.4sqi.net/img/general/600x600/4501982_sOUOJgvNfBDr1psgDTaKY6O6zFgIRvaz1qzo1Uu9J8o.jpg',
        monday_hours="11:00am-01:00pm,02:00PM-08:00PM",
        tuesday_hours="11:00am-01:00pm,02:00PM-08:00PM",
        wednesday_hours="11:00am-01:00pm,02:00PM-08:00PM",
        thursday_hours="11:00am-01:00pm,02:00PM-08:00PM",
        friday_hours="11:00am-01:00pm,02:00PM-08:00PM",
        saturday_hours="11:00am-01:00pm,02:00PM-09:00PM",
        sunday_hours="11:00am-01:00pm,02:00PM-07:00PM",
        email="edenbubz@gmail.com",
        address="3003 Richmond Rd, Texarkana, TX 75503",
        phone_number="903-334-7373",
        business_website="bubblebobaz.com",
        about_us="Serving delicious bubble teas since 2005. We are also connected to a loaded baked potato restaraunt that is fantastically delicious. We offer the standard fare of bubble teas, milk teas and hot teas. We have popping bubbles, tapioca pearls and all the sorts. We welcome unique flavor combinations and have an enthusiastic staff that is happy to offer flavor recomendations as well!",
        price=3,
        tags="boba, potatoes, tea, fusion"
    )
    biz10 = Business(
        user_id=4,
        name='Screen Door Eastside',
        preview_img='https://s3-media0.fl.yelpcdn.com/bphoto/ziEim_mPUIUMId3Tl8H3Qw/o.jpg',
        monday_hours="09:00am-02:30pm,05:00PM-09:00PM",
        tuesday_hours="09:00am-02:30pm,05:00PM-09:00PM",
        wednesday_hours="09:00am-02:30pm,05:00PM-09:00PM",
        thursday_hours="09:00am-02:30pm,05:00PM-09:00PM",
        friday_hours="09:00am-02:30pm,05:00PM-09:00PM",
        saturday_hours="09:00am-02:30pm,05:00PM-09:00PM",
        sunday_hours="09:00am-02:30pm,05:00PM-09:00PM",
        email="screendoor@aa.io",
        address="2337 E Burnside St Portland, OR 97214",
        phone_number="503-406-4665",
        business_website="screendooreastsiders.com",
        about_us="""Specialties
Screen Door presents a revival of regional American cuisine, a survey of the south, from South Carolina Lowcountry cuisine to soul food and Cajun one-pot cookery to the refined Creole and French preparations found in New Orleans. We celebrate Southern cuisine from the quintessential hearty fare to the everyday foods gathered fresh from the garden. At Screen Door we serve natural, local and organic produce and meats everyday. Central to our concept is weaving the rich bounty of local fresh produce found here in the Pacific Northwest into our menu.

History
Established in 2006.

Screen Door's menu is a survey of the south, from South Carolina Low country cuisine to soul food and Cajun one-pot cookery to the refined Creole and French preparations found in New Orleans. We explore all methodologies and preparations from the historical to the modern and from the rudimentary to the refined. At Screen Door we serve local and organic produce and meats everyday. Screen Door is a part of maintaining the connection between farm and plate and simultaneously presenting a revival of regional American cuisine through the historical methodologies and preparations found in the South.""",
        price=5,
        tags="southern, breakfast/brunch, cajun/creole"
    )
    biz11 = Business(
        user_id=5,
        name="Cheryl's on 12th",
        preview_img='https://s3-media0.fl.yelpcdn.com/bphoto/oAdgz_VizpyBwLNDjDlCRg/o.jpg',
        monday_hours="07:00am-04:00pm",
        tuesday_hours="07:00am-04:00pm",
        wednesday_hours="07:00am-04:00pm",
        thursday_hours="07:00am-04:00pm",
        friday_hours="07:00am-04:00pm",
        saturday_hours="07:00am-04:00pm",
        sunday_hours="07:00am-04:00pm",
        email="cheryl@aol.com",
        address="1135 SW Washington St Portland, OR 97205",
        phone_number="503-595-2252",
        business_website="cherylz.com",
        about_us="An in house bakery makes fabulous pastries, the marketplace features gourmet imports, local artisan foods, cheese, charcuterie, wine and custom gift baskets and the kitchen prepares fine foods for dine in, take out and catering events of all kinds.",
        price=3,
        tags="Breakfast & Brunch, Sandwiches, American (New)"
    )
    biz12 = Business(
        user_id=6,
        name='Lechon',
        preview_img='https://s3-media0.fl.yelpcdn.com/bphoto/D024GLSRhP9R7l9DGYQYMg/o.jpg',
        monday_hours="04:00PM-09:00PM",
        tuesday_hours="04:00PM-09:00PM",
        wednesday_hours="04:00PM-09:00PM",
        thursday_hours="04:00PM-09:00PM",
        friday_hours="04:00PM-09:00PM",
        saturday_hours="04:00PM-09:00PM",
        sunday_hours="Closed",
        email="lechon@aa.com",
        address="113 SW Naito Pkwy Portland, OR 97204",
        phone_number="503-219-9000",
        business_website="lechonfoodz.com",
        about_us="Cocktail bar with lovely Tapas and high quality appetizers served during the evenings in downtown Portland.",
        price=5,
        tags="Tapas Bars, Cocktail Bars"
    )
    biz13 = Business(
        user_id=1,
        name='Salt & Straw',
        preview_img='https://s3-media0.fl.yelpcdn.com/bphoto/z77fmQ_91w_OUC6e7BClqg/o.jpg',
        monday_hours="11:00am-11:00PM",
        tuesday_hours="11:00am-11:00PM",
        wednesday_hours="11:00am-11:00PM",
        thursday_hours="11:00am-11:00PM",
        friday_hours="11:00am-11:00PM",
        saturday_hours="11:00am-11:00PM",
        sunday_hours="11:00am-11:00PM",
        email="saltnstrawice@icecream.com",
        address="838 NW 23rd Ave Portland, OR 97210",
        phone_number="503-673-6412",
        business_website="saltnstraw.com",
        about_us="""Specialties
We make ice cream that's about more than ice cream. We make ice cream about the ingredients we use and the farms and artisans they come from. About how we cook and freeze and candy and sort and burn and smash and hand-drizzle and ribbon and spoon and sprinkle all of our ingredients in intriguing and unexpected ways.

History
Established in 2011.

For years, Kim Malek was dreaming about the creation of a community gathering place. One where you could run into neighbors, spend time with family, or treat yourself. A great neighborhood place. The answer was clearly an ice cream shop. Enter Tyler, her cousin who wanted in. But there was a catch: Neither had ever made ice cream before. Luckily, Tyler wasn't afraid of his rookie status. He spent $16 on four used ice cream makers and got to work, spending hours endlessly testing flavor ideas in his own personal Wonka-verse (a.k.a., Kim's basement). Meanwhile, Kim cashed in her savings and bought a cart. And then the two of them turned to their community, asking friends--chefs, chocolatiers, brewers and farmers--for advice, finding inspiration everywhere they looked. And that's how Salt & Straw came to be. Our ice cream gives you a moment of happiness and connection to the community around you.""",
        price=4,
        tags="Ice Cream & Frozen Yogurt"
    )
    biz14 = Business(
        user_id=2,
        name="Pip's Original Doughnuts & Chai",
        preview_img='https://s3-media0.fl.yelpcdn.com/bphoto/vZljJvbTFCykiqbY4pSiiA/o.jpg',
        monday_hours="08:00am-02:00pm",
        tuesday_hours="08:00am-02:00pm",
        wednesday_hours="08:00am-02:00pm",
        thursday_hours="08:00am-02:00pm",
        friday_hours="08:00am-02:00pm",
        saturday_hours="08:00am-02:00pm",
        sunday_hours="08:00am-02:00pm",
        email="pipz@donuts.com",
        address="4759 NE Fremont St Ste C Portland, OR 97213",
        phone_number="503-206-8692",
        business_website="pipz.com",
        about_us="Locally owned and operated by husband and wife duo Nate and Jamie. Pip's features fresh & hot, made to order doughnuts and house-crafted chai tea lattes, including chai flights. Our goal is simple: Excellence. Simplicity. Kindness. To to provide you with simple, excellent products in a kind, friendly, and welcoming manner, all served up in a warm and cozy space..",
        price=3,
        tags="Coffee & Tea, Donuts, American (Traditional)"
    )
    biz15 = Business(
        user_id=3,
        name='Pine State Biscuits',
        preview_img='https://s3-media0.fl.yelpcdn.com/bphoto/uWrT5SjC3Y-e7vo-gmh3jQ/o.jpg',
        monday_hours="08:00am-02:00pm",
        tuesday_hours="08:00am-02:00pm",
        wednesday_hours="08:00am-02:00pm",
        thursday_hours="08:00am-02:00pm",
        friday_hours="07:00am-03:00pm",
        saturday_hours="07:00am-03:00pm",
        sunday_hours="07:00am-03:00pm",
        email="pinestate@biscuits.com",
        address="2204 NE Alberta St Portland, OR 97211",
        phone_number="503-477-6605",
        business_website="pinebiscuitz.com",
        about_us="Made from scratch buttermilk biscuits and fixins inspried by our southern roots.",
        price=2,
        tags="Southern, Breakfast & Brunch, Sandwiches"
    )

    db.session.add(biz1)
    db.session.add(biz2)
    db.session.add(biz3)
    db.session.add(biz4)
    db.session.add(biz5)
    db.session.add(biz6)
    db.session.add(biz7)
    db.session.add(biz8)
    db.session.add(biz9)
    db.session.add(biz10)
    db.session.add(biz11)
    db.session.add(biz12)
    db.session.add(biz13)
    db.session.add(biz14)
    db.session.add(biz15)
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
