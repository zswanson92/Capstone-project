from app.models import db, Review, environment, SCHEMA


def seed_reviews():
    rev1 = Review(
        user_id='2', business_id='1', body='I LOOOOOOOOVE me some WINGSTOP. Its super fire, honey bbq all day everyday.',
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/CKQAe8jNSV50f_uHoaEnqg/348s.jpg')
    rev2 = Review(
        user_id='3', business_id='1', body='The chicken was just OK, my fries were kind of soggy, would rec a lot of other chicken spots',
         stars=3, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/x-jlZ1KX3IW1dOSZBa_K0w/348s.jpg')
    rev3 = Review(
        user_id='1', business_id='2', body='Honestly a terrible experience, my register worker threw the change onto the counter rudely, will never have another whopper again!',
         stars=1, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/7xRM0C6kvkXQQ9Gq-cvK0A/348s.jpg')
    rev4 = Review(
        user_id='3', business_id='2', body='It was ok. I mean its fast food, people getting served food by people making these types of wages have way too high of an expectation. Go to a restaraunt nerds.',
         stars=4, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/0OZ67wN8mAKgFjjJ2Yf8OQ/348s.jpg')
    rev5 = Review(
        user_id='1', business_id='3', body='This place is fantastic. Service is very fast, and they have an extensive menu that I have yet to have a bad experience with. Chili cheese fries are insane!',
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/yDVBas6f8Gesx1dx-6IdOA/348s.jpg')
    rev6 = Review(
        user_id='2', business_id='3', body='I have been eating here since high school, where I went to about a block away. I used to have this every week for lunch, insanely delicious. Never a bad experience, highly recommend.',
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/Hi7kYQ2ZC7tTLQb1nJAmwQ/348s.jpg')
    rev7 = Review(
        user_id='1', business_id='4', body='The waffles here are superb, I really love me some waffles.',
         stars=5, image_url='')
    rev8 = Review(
        user_id='2', business_id='4', body='This place has great food, but a very scary atmosphere. Usually my go to for late night after a night out, however I have seen a lot of "world star" moments here and very illicit and shady activity. Def try the chicken and waffles though!',
         stars=4, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/EOVhNYaXn_3ueH256-6WNQ/348s.jpg')
    rev9 = Review(
        user_id='3', business_id='4', body='Pretty sure I saw a rat run by during my breakfast. Dennys serves better food, would not recommend.',
         stars=1, image_url='')
    rev10 = Review(
        user_id='5', business_id='4', body='My dad used to take me here all the time, and as an adult I still love this place. It can get rowdy but I like the reality check from the staff, reminds me that they are people too not just corporate drones. Highly recommend biscuits and gravy if you are not going the waffles route.',
         stars=4, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/zwzu0GgZsp4Xf11tVGAzBQ/348s.jpg')
    rev11 = Review(
        user_id='1', business_id='5', body='Their french fries are super delicious, they taste like real potatoes. Also highly recommend their milkshakes, while they are not the biggest they are super creamy and decadent. Very fulfilling meal, burgers are solid.',
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/UO72P5sZ2KuXBrhRyoIBFw/348s.jpg')
    rev12 = Review(
        user_id='2', business_id='5', body='Pretty average burger joint. Liked the variety of bun options however their flavor profiles for burgers is nothing particularly special. Great shakes.',
         stars=3, image_url='')
    rev13 = Review(
        user_id='3', business_id='5', body='This place is relatively newer on the scene here in Texarkana. There may be some better burgers but in my opinion I love this specific location, right on the richmond road strip as well as their milkshake quality being superb. The fries are too die for. Definitely recommend.',
         stars=4, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/iEHLN76iFcEiXeo7KxA6WQ/348s.jpg')
    rev14 = Review(
        user_id='4', business_id='5', body='My go to burger spot. A bit pricey for the portion size in my opinion but the quality is amazing, love to take myself here as a treat!',
         stars=5, image_url='')
    rev15 = Review(
        user_id='2', business_id='6', body='It is literally the only place to get Indian food within a 30 mile radius of this area, so kinda default great for me!',
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/2U2JHyicKUlNxHrPgHavLg/348s.jpg')
    rev16 = Review(
        user_id='1', business_id='6', body="A unique and superb Indian cuisine experience. I've known the owner for years, ever since he was in the mall and he definitely deserves having his own place here. Everyone is always nice and the food even nicer. To me, it's to die for!",
         stars=5, image_url='')
    rev17 = Review(
        user_id='2', business_id='6', body="""Needs improvement.

What went well - The overall presentation of the food was great. The stars are solely for this purpose. The taste was okay at max. We ordered the paneer tikka (good), garlic naan (great) and the bhindi masala (weak).
The restrooms were clean. I appreciate the staff wearing masks during COVID operations for safety.

What needs attention and improvement -
Starting from the menu : Being the only Indian restaurant in the area, was expecting better from this place. The lack a lot in the menu itself since there's less than 5 options for vegetarians to pick from. Second, the menu is not an accurate representation of what you finally get on the table after ordering. For example - the vegetarian Entree comes with a regular naan and rice. This was totally missed in mentioning in the menu AND when I asked my server about the entrees and quantity. Another example is of the Bhindi Masala I ordered. The menu says it's cooked by slitting okra and filling in spices. Being an india, I know what this should look like after cooking. To me surprise, when this came out, the okra was cut in small pieces in a gravy. Why can't the menu mention what is being presented?

Service - My server did not the answers to any of my basic questions on the menu. I can ignore this and be patient with that. More important flaw was the owner / manager came to ask if the food was okay. My husband mentioned that the paneer was great but the bhindi is raw ( which we double checked before saying). His response was - no that is correct, we cook it this way and it is properly cooked. Suggestion to the business - If you don't value the feedback from your customers, then please don't act like you care. I would have otherwise given brownie points for a business reaching out and understanding how they were doing - but here it was mere formality.

The vibe was very we don't care - eat and go. Would have like them to be lil bit more welcoming.
Not returning unless the menu is expanded.""",
         stars=2, image_url='')
    rev18 = Review(
        user_id='4', business_id='6', body="Just okay.. Ordered Chicken tikka masala, chicken momo, and the garlic naan bread. Flavor was bland for all 3 items. Was expecting a lot more, since the reviews were all mostly positive. The garlic naan was best part.",
         stars=2, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/Dcg-13xosukM3t0fBtjYdw/348s.jpg')
    rev19 = Review(
        user_id='2', business_id='7', body="The most impressively fast & accurate service, at a Sonic Drive-In, EVER!! They are on it! The food was also great. The parking lot was full, so I expected a wait. I think I ordered slower than they got my food to me.  This was at 4pm on a Thursday. 5 stars!!!",
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/ZVxWiOlyWfs0TfZ49IwZ7Q/348s.jpg')
    rev20 = Review(
        user_id='3', business_id='7', body="My son was eating plain vanilla ice cream in a dish and he said there was a hair in it so I examined it and dug through it and their were multiple hairs in it! I'm so disgusted!",
         stars=1, image_url='')
    rev21 = Review(
        user_id='4', business_id='7', body="Alright, let's get right to the point. I don't come here often, but the times I have, there's always been a disappointment. The car hops always seem nice, but the food? Not so much. Cherry limeades with 10+ cherries in it, ice cream cones that taste and feel ruined, and now continuing to get my order wrong by giving me chili cheese tots instead of chili cheese bites. Not only that, but the hot fudge sundae I ordered with it was a complete and total disaster. It was harder to find ice cream in it than from when I could remember my last hot fudge sundae. The 'fudge' had some sort of caramel coffee taste floating within that just didn't seem right and it was hard to even feel any soft serve besides the whip cream. If not Sonic, then this location itself has gotten my last dollar. What a disaster!",
         stars=1, image_url='')
    rev22 = Review(
        user_id='5', business_id='7', body="Customer service today is the best I've ever seen at any Sonic.  Very fast, food was hot, and professional communication.",
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/3xADNoSCt4QjCMwbwrBxVw/348s.jpg')
    rev23 = Review(
        user_id='1', business_id='8', body="""The Italianish place across the parking lot was having difficulties but Outback was on point.

Haley is great and we got our food fast!""",
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/XCv_R9Kgz3FECB2NFeTdMg/348s.jpg')
    rev24 = Review(
        user_id='3', business_id='8', body="food is always so good but the service is awful. The last three times I've been it's taken over 20 minutes to seat us, another 20 to take our drinks, and the place is not packed. Lol the servers are just lazy and don't care",
         stars=2, image_url='')
    rev25 = Review(
        user_id='4', business_id='8', body="Tyler H is a rockstar server. Attentive yet not too attentive and dedicated to make sure my family and I were taken care of. Thanks!",
         stars=5, image_url='')
    rev26 = Review(
        user_id='5', business_id='8', body="We wound up here quite by accident while looking for a Saltgrass Steakhouse. We were seated pretty quickly. My friend lucked out and got an 11 ounce steak because they were out of the 8 ounce ones. I had the Alice Springs Chicken but was a bit disappointed that there was so much pepper on mine. I didn't feel like complaining about it because my friends' food was good. The only real issue with the meal was being in the bathroom as a waitress was puking her guts out. I had to skidaddle out of there because it was gross. Otherwise it's a servicable location.  Parking can be hard tho there are other lots behind the restaurant.",
         stars=3, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/dOjUwaorC_roPh45Tbc6QQ/348s.jpg')
    rev27 = Review(
        user_id='2', business_id='9', body="Eden Bubble Tea is by far my favorite place to go to now. Everything is pretty fairly priced, the food, tea, and most importantly the staff and atmosphere is what keeps me coming back. I want to formally say, Thank you everyone at Eden Bubble Tea that I have talked to for being amazing people.",
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/07vgI35MybCcKDYj9g44pA/348s.jpg')
    rev28 = Review(
        user_id='1', business_id='9', body="""I think management may have changed from previous years. The food was horrible!!! We order fried rice, Vietnamese spring rolls and sushi.

The shrimp tempura taste like a fish stick with over cooked rice.

Honestly the sushi was worse than gas station food.

The fried rice had grease/oil dripping out of it.

The worst was my spring roll. It was shoved full of iceberg lettuce( not what you use in a spring roll) I got the combination roll with shrimp and pork. Traditionally the pork would be thinly sliced this was huge chucks of pork that tasted very old""",
         stars=1, image_url='')
    rev29 = Review(
        user_id='4', business_id='9', body="""I am not sure how the food would be since once we walked in the door it smelled old and it only had take out, so we did not want to take a chance on the food. A 4 star rated restaurant should not look like that so I am not sure where the 4 stars came from.
I would not recommend it but that is just me so eat at your own risk.""",
         stars=2, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/egZrmdXSdkGW3y3LCJevOw/348s.jpg')
    rev30 = Review(
        user_id='5', business_id='9', body="I have been craving Boba for a while and was pleasantly surprised to find a full menu at a Bubble Tea restaurant. I ordered delivery through DoorDash and everything was exactly what I was hoping for!! Very delicious and fresh at a reasonable price. I highly recommend.",
         stars=5, image_url='')
    rev31 = Review(
        user_id='2', business_id='10', body="""Really long line but the food is great!
Haven't been to the NW location yet.
The Chicken and waffles is epic.""",
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/jT-Nlm9kc1bnYz23T6O88Q/348s.jpg')
    rev32 = Review(
        user_id='1', business_id='10', body="""Great service and delicious food and drinks. We appreciated the attention, accommodation and mindfulness with our food allergies as well as being able to squeeze in a last minute reservation.

The only negative is that it is pretty cramped with seating very close to each other and pretty loud due to the amount of people in a pretty small space. I'd take note for anyone with disabilities it could be hard to maneuver.

I had the chicken sandwich with was super fresh, chicken crispy and great combination with the slaw. Serving big enough to split with two people for sure. We also had the chicken and Wales waffles and brisket huevos Ranchero.  All super tasty. Don't forget the drinks! The "don't tell me what to do" cocktail was so good.

Will be back for sure!""",
         stars=5, image_url='')
    rev33 = Review(
        user_id='3', business_id='10', body="""If you happens to visit Portland, you have to (must!!) stop by this place. It's going to be a long wait, so I'd recommend making a reservation beforehand.
I was in love with the decoration, with mason jars that line the shelves. There was little separation between dining area and kitchen, which was good, I like the smell of coffee, cinnamon, and fried chicken that mingles in the air. It makes you feel like home.

The foods were outstanding. The portion is big. We ordered for five people, mind you, we aren't strong eaters . But the chicken tho, it was seasoned to perfection, crispy on the outside and tender and moist on the inside. Try it!! You won't regret it!

Definitely will return if i have the chance!""",
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/YflekuUVx-_WfNiKHHlC0A/348s.jpg')
    rev34 = Review(
        user_id='5', business_id='10', body="""It's time for a post-pandemic update!  There's a reason why Screen Door always has a long line and huge wait they do everything to perfection!!  They also now take reservations, which I love, wish everywhere in PDX did this.  I arrived right on the dot for our reservation and our table was ready.  About 30 seconds after being seated, a server was already at the table offering to pour us some coffee, that is stellar service, wow!

But the food!  Yes, I've never had anything bad here.  Their fried chicken is excellent, but this was a brunch day.  I'd had a very heavy meal the night before, so for brunch, I got the blackeyed pea fritters, which were so delicious!  They are a bit spicy, but not too spicy.  The fritters are also very filling, I couldn't finish my order.  Only thing I didn't love is that they serve them with a super sweet dipping sauce that I wasn't crazy about.  I feel like a creamy, not sweet sauce would work better.

I also got the fruit plate, which was incredible!  It arrived looking like a beautiful work of art and every fruit on the plate was perfectly ripe and sweet.  Mind blown!

My friend got the shrimp with grits and said it was fantastic.  She was also very pleased that they were able to make her a grapefruit mimosa.  She didn't want her biscuit and gave it to me.  Well, I'm from the south and that was one of the best biscuits I've had.  It was perfectly crispy on the outside and fluffy on the inside, yum!

Come to Screen Door when you want to brunch your face off and I highly recommend reservations!""",
         stars=5, image_url='')
    rev35 = Review(
        user_id='2', business_id='11', body="""Good food that came out super quickly even though every table was full, and super friendly host and server. I got a bacon and ham omelet with hash browns and a blueberry lemonade, I'd heavily recommend all of it!""",
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/pfauDOnHzeQn46hc9qcwBQ/348s.jpg')
    rev36 = Review(
        user_id='3', business_id='11', body="""Great service, excellent food, and a complimentary beignet?
What's not to like?
I visited at 10:00am on a Monday, the place was buzzing.
Was early for my reservation for one, but seated immediately no questions asked.
Chose the Croque Monsieur which was recommended by my server.
Heavenly, my only regret is I couldn't take the leftover 1/3 home (not going straight home).  Cheesy hash browns on the side - probably didn't need to go there but I couldn't resist. And they did not disappoint!
Looking forward to visiting again!""",
         stars=5, image_url='')
    rev37 = Review(
        user_id='4', business_id='11', body="""FOOD: honestly mediocre. I was very much looking forward to this place but left disappointed. I got the famous Portuguese Fried Rice but it tasted like something I could get for cheaper and better at a local Chinese restaurant...

AMBIENCE: always bustling with people, classic upscale American dining vibes

SERVICE: the service was efficient, staff were friendly, though it was still very much packed""",
         stars=3, image_url='')
    rev38 = Review(
        user_id='1', business_id='11', body="""Very quick service, was seated right away and the food came out very fast! We ordered the Portuguese fried rice and granola yogurt bowl. Both were extremely tasty and had generous portion sizes! They give complimentary beignets which were super fluffy and tasty.

The service was fine. Our waitress seemed a bit rushed but other than that I definitely want to come back to try other menu items.""",
         stars=4, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/hqThGrahLNwXBrFK_gANQQ/348s.jpg')
    rev39 = Review(
        user_id='2', business_id='12', body="The food and service are all pretty good. Resto environment is chill and the interiors are nice. It's definitely pricy and I have a feeling that the chef made dishes on the salty side so you had to order drinks lol",
         stars=5, image_url='')
    rev40 = Review(
        user_id='1', business_id='12', body="""My favorite from last night: the cheese empanadas and the Lomo Saltado.  Delish!!!!
We also ordered the candies Brussel Sprouts, Pork Belly bun and the wontons. EVERYTHING was very tasty.  We also had a very nice waitress from the Dominican Republic.

We will miss this place when we head back to California!""",
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/aI_dcP7YpeAkp6ZcDuuIAQ/348s.jpg')
    rev41 = Review(
        user_id='4', business_id='12', body="""Drinks:
- I didn't get a drink, but my girlfriend got Persnickety Persici. That was probably the best thing we got all night from this establishment. The balance between sweetness and acid in this drink was well executed. The flavor profile was like a cross between a peach and grapefruit. I also believe there's a peach puree ice cube inside that tasted like a peach snow cone (both in flavor and texture). The food wasn't that great, but the drinks are.

Food:
- The Duck Wings are bad. The sauce is good, but there's no meat. It's just batter and bones basically. I was really disappointed by this dish, had there have been more duck meat it would've been great though
- The Steak Tartar was way too over dressed, there was too much going on with it. When I have a steak tartar I want to be able to taste the meat but I couldn't at all. I think this dish is just doing too much
- Vegetable Ceviche: The acid was good, but the heart of palm was missing the starchiness that I love. It honestly kind of tastes like a pineapple ceviche. The chips that came with it were good though
- The Shrimp Ceviche was just dull, honestly the vegetable one was better. The shrimp didn't really taste that fresh, there was little lime flavor. I dunno maybe I just got a bad batch but it was just underwhelming. It just didn't taste fresh or uplifting to me at all like ceviches usually do
- The Peruvian Fried Chicken Bites is just basically deep fried batter with sauce, seriously I barely got any chicken. The only saving grace to this dish was the basil garnish and basil aioli. Without that this dish is obsolete
- The Foraged Mushrooms was the best dish of the night to me. The brioche bun was done perfectly it has a thin layer of crisp and pillowy on the inside. It played really well with the mushrooms, I've never had a combination like this before. The egg yolk also adds so much richness to the dish when it's absorbed into the brioche. It's really good, highly recommend this one
- The Pan Seared Scallops were also good, I liked the corn polenta more than the scallops. I think they use fresh corn and mix it with cornmeal when they make the polenta because I think I remember feeling the texture of corn flesh in the polenta. There's a slight sweetness to this dish that is addicting to me
- The Potato Fritter -- at least I think that's what it's called -- was bad. The potatoes were well cooked and the texture was how I liked it; however, the sauce tastes like a thick Franks hot sauce and the potatoes were drenched in it. Do yourself a favor and make this at home instead

Ambience:
- The entrance doors are super tall which felt like a grand entrance when you walk in which upon first impressions made me feel like I was going to walk into a big space, but I was confronted with a kind of cramped dark space that slightly dips underground. The juxtaposition of the entrance and the space itself kind of threw me off.
- The waiting area is a thin strip in front that doesn't handle lots of people well, you're basically standing shoulder to shoulder in a narrow space to wait. Luckily they do offer some seating
- I can't lie the jelly fish tank is pretty cool, it's really eye catching and made my wait a little more bearable thanks to the floaty translucent creatures
- There's a weird narrow strip that is a bar style seating in the middle of the space which I don't like and I don't know why I don't like it.

Overall:
This place did not live up to the hype for me. The service was slow, we put in a reservation and still had to wait a long time to be seated. I think literally 3 separate walk in parties got seated before we were without a reservation. I was observing the staff during the 30ish minute wait and everyone looked like they were moving in slow motion. Like where's the sense of urgency? It's a packed house on a Friday night. None of the poultry items were worth it during my visit. The drinks are good and the space looks nice, but unfortunately I don't think I'm compelled to return.""",
         stars=2, image_url='')
    rev42 = Review(
        user_id='3', business_id='12', body="""Came here for a birthday celebration. We were a party of 7 and highly recommend you utilize their open table reservation app (maybe a week or 2 in advance) to get in. We went on a Saturday night- so it was expected to be busy. The atmosphere was very intimate and welcoming. Such a beautiful aquarium display at the bar.

When we were seated, the birthday celebrant was greeted with a champagne- which was super nice of them to do. They cater family style dining- so everything was shareable and all very delicious!

Drinks- they offer a variety of cocktails, mock tails, beer, and wine. They also have a corkage fee of $20 for your own bottle of wine.

Food: the fried octopus was sooo delicious! It wasn't over cooked and perfectly tender. The bone marrow is very popular and runs out fast- we were lucky to get an order in. Definitely a must try when you're here. Pork belly baocito is a delicious piece of pork belly sandwiched in a warm soft bao- definitely could have ordered more of this. Tonight they had a special of duck wings which were phenomenal and one of their biggest dishes served (other than the grill dishes). For starch and sides- they offer salads and civeche.

Service: everyone was very nice and offered suggestions as requested.

Parking: there's a paid parking lot right next to the restaurant and street parking.""",
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/vifTsvWn3-xqO9slYirc1w/348s.jpg')
    rev43 = Review(
        user_id='2', business_id='13', body="""Of all the Salt and Straws, this one is the BEST (I've gone to all the locations in Portland, and most of the ones in LA) because they give the largest scoops and for some reason, it even tastes better here (perhaps because they use local ingredients and Oregon just does it better? IDK)

They offer a variety of seasonal flavors but my go-to is a double scoop of honey lavender and olive oil ice cream. THIS IS //THE// COMBO, a MUST TRY. When their seasonal flavors are not to my liking, this combo never fails to make my day. If you have to choose a season to visit tho, I'd say come fall/winter for some really cool/nostalgic flavors~""",
         stars=5, image_url='')
    rev44 = Review(
        user_id='3', business_id='13', body="""New favorite ice cream shop!!

Such unique flavors. I particularly liked the snickerdoodle flavor. The olive oil flavor was also surprisingly delicious. It's kind of a savory vanilla.. you have to try it!""",
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/LuzCS0UJM4HrIrXt8IsNfQ/348s.jpg')
    rev45 = Review(
        user_id='4', business_id='13', body="""With a name like Salt & Straw, you know that this is a different type of ice cream shop. Coming here is to get adventurous, not to get vanilla or chocolate ice cream....no ...no.....

Salt & Straw began as a food cart in the Alberta Arts District of Portland, Oregon.

Salt & Straw now has locations in Portland, Eugene, Los Angeles, Anaheim, San Francisco, San Diego, Orlando, Sacramento, Seattle, and Miami. Salt & Straw is partially owned by film star and wrestler Dwayne "The Rock" Johnson.

Since opening, Salt & Straw has gained national media attention for its exotic ice cream flavors, some of which are seasonal. Standout flavors, such as Bone Marrow with Bourbon Smoked Cherries and Arbequina Olive Oil, have served as some of the main reasons Salt and Straw has been included on lists of America's best ice cream.

Flavors offered at the ice cream shop vary depending on the seasons and ingredient availability, as all main ingredients are locally sourced.""",
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/whyBcstJzTYjeqocG1Ahsw/348s.jpg')
    rev46 = Review(
        user_id='5', business_id='13', body="""Here's the thing.... I still don't get 'it'. I mean, ice cream...of course...I would never argue against adoring and wanting ice cream. I mean the obsession with Salt & Straw - I genuinely loathe lines and find that Portlanders love them and creating them so I usually get pissed off when a friend demands we stand in one for something we could have grabbed without a line around the corner that is probably better. The flavor thing here is also not me... I grew up LOVING vanilla ice cream - yes, it is still a favorite with maybe some fruit. You start talking about putting mashed potatoes and gravy as an ice cream flavor and no, I am out.

I was in the neighborhood with a friend who wanted Salt & Straw...and her gorgeous eye lashes batting at me - ok, fine... So, we waited in line chatting away and then a delightful helper offered us samples - I tried two seasonal things with apple which were delicious! And then I made a discovery here... they might have the best mint chocolate chip ice cream I have had! And it is vegan!""",
         stars=4, image_url='')
    rev47 = Review(
        user_id='1', business_id='14', body="""I was reading an article about tourist traps to avoid in Portland, one of which was Voodoo Donuts, which was originally at the top of our "To Try" list. Instead, the blogger recommended we try Pip's, a local favorite, and what a great swap this made! Pip's is not your average donut shop, because they serve mini, bite-sized donuts that are made fresh to order. They are cake donuts, which I generally don't love, but because of their petite size and their hot, crisp texture, from being just popped out of the fryer, Pip's donuts have a beautifully golden outer shell that encrusts a delightfully airy, sweet inside cake. We tried one of each available flavor, as well as their seasonal special, Brandied Apple, all of which were spectacular! We ordered 8 donuts, only to be met by a wonderful surprise when they threw in an extra donut on the house. Their donuts were the perfect size, enabling you to guiltlessly sample all they have to offer.

Pip's also serves a delicious selection of housemade chai, which we, of course, had to try. We tried the Smokey Robinson and the Heart of Gold. The Smokey Robinson lived up to its name--it had a punchy smoked flavor, which was a little too strong for our taste. We much preferred the Heart of Gold, which had a more traditional chai flavor, with the perfect hint of sweetness and coconut. Another thing to note is that they don't up-charge for alternative milks at Pip's, which is awesome! I mean, where else have you heard that switching to oat milk won't cost at least a quarter?

Overall, we love, love, LOVED Pip's and would definitely recommend it to anyone who wants to satisfy a sweet craving or just needs some pleasantly warming chai on a cold day. My only note would be that because Pip's is no secret, so they do get pretty long, and it took us about 15 minutes to order. But, take it from me, these donuts are WELL WORTH the wait!""",
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/bdrH96BDHYyhrdi-5dXSdg/348s.jpg')
    rev48 = Review(
        user_id='3', business_id='14', body="""Loved coming to this quaint, unique and family-owned donut and chai shop while visiting Portland.

There was a bit of a line on a Sunday morning but easily found a spot to sit after I ordered. I got an order of 6 donuts (one of each flavor) and then a Smokey Robinson. The donuts were small and delicious; I easily finished the 6 by myself. My favorite as the Reggie Lee. The Smokey Robinson was good but wish it was a little sweeter.

Parking was a little difficult as it's located on a busy tight street. The are residential streets with some that have parking so you just have to keep looping around til you find something.""",
         stars=4, image_url='')
    rev49 = Review(
        user_id='4', business_id='14', body="""We got the Nutella, Honey, and Cinnamon sugar donuts! They were all good, but I think I like the cinnamon sugar most and the nutella one second! I wish we got drinks to go with the donuts.

P.S. My niece turned 5, and we got a free dozen donuts of our choice!""",
         stars=4, image_url='')
    rev50 = Review(
        user_id='5', business_id='14', body="""I finally came for my [free] birthday donuts and could not be more satisfied! I got the Nutella Sea Salt and it was so good and mouth watering. I got B the candied bacon maple and we barely made it home with some left. Truly delicious. Went on a Monday afternoon, lovely friendly staff. I hear there's a line out the door on the weekends. There are about 5 daily (delicious) flavors, as well as they are known for their chai. I got matcha and it was good- interested in the chai flight!""",
         stars=5, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/brw8RyH6Xc8H_ntzlo1y0g/348s.jpg')
    rev51 = Review(
        user_id='2', business_id='15', body="""There is a reason this place has SO many reviews with majority excellent reviews of 5 stars!

It was on my 'must try' list and I drove out of my way to check it out.  Well worth it - followed by a stroll throughout the Alberta district.

As I walked in, staff were welcoming.

I ordered The Reggie - a delicious biscuit with fried chicken, bacon & cheese  - it normally comes topped with gravy, but I got this on the side.  Allowed me to add as much as I wanted.  They had both a sausage gravy and mushroom gravy option.  The sausage gravy was great - and even with the bacon - did not feel I was eating a ton of meat.  I considered the Reggie Deluxe which is the above + an egg, but decided this would be enough.  Portion size was good.  And food was delicious.

I had the simple house blend coffee.  Nothing fancy, but good "diner-style" coffee in a good mug.

Seating is somewhat limited inside. A few tables but then a good amount of bar seating.  There is an outside area (with heat lamps?) that allows for larger groups.

Great breakfast / brunch option.  Also great for take out.  I would go back for sure.

Single unisex bathroom.

Street parking.""",
         stars=5, image_url='')
    rev52 = Review(
        user_id='1', business_id='15', body="""Giving two stars based on the service I received which was good but that was the only thing good. The food was lacking in flavor. I'd you'd ever biscuits, It should be the star of the show.

I got a bacon egg and cheese with chicken and a side of mushroom gravy. I also ordered some bacon chive and cheese hushpuppies and a cheer wine for $23.50. For that price tag I was expecting to enjoy It but was sadly disappointed. The first bite left me confused. I took a few more bites and realized everything including the chicken had no seasoning/flavor.

The hush puppies were moist but again lacked flavor/seasoning.

There are nearly 4K reviews and with several locations I thought a biscuit was hard to mess up.""",
         stars=2, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/XUBi0it3i2OZKq0187-RSg/348s.jpg')
    rev53 = Review(
        user_id='4', business_id='15', body="""The first time I went to Pine State (this location) it was decent. Bloody Mary was good, the Chatfield was a bit dry, but it was fine. This time we sat outside, rude people in front of my husband wouldn't let him inside (even though there was room), our food took forever...like 40 minutes for biscuits. They weren't super busy at the time either, but the folks in front of my husband in line were a large party so maybe that's why. I went to grab silverware but they were out, had to grab more.

I had an appointment at 11 so I rolled out, as food was taking a really long time and I needed to go, and he asked for a box so he could just box it up for me. Box never came. He couldn't grab one because we had our dog, so when I returned about 8 min later, I just scarfed down cold biscuits and gravy because I couldn't let it go to waste. He said his food came out lukewarm, so mine was definitely cold at that point. The staff did turn on the other heaters for us (it was self serve and I turned on the one by us), which was nice, and asked about it but...no box which is what we really needed.

Overall it wasn't a great experience from a place that I know can do better, did do better, but did not do that today. Maybe next time or a different location? Not sure but I'm not very satisfied with the food or the situation.""",
         stars=2, image_url='')
    rev54 = Review(
        user_id='5', business_id='15', body="""Pine State Biscuits has been on my list to try ever since I first spotted it. We tried to go on Thursday but the store was closed due to mechanical difficulties so we went to Tin Shed a few blocks away instead. After having their biscuits, we were underwhelmed when we finally got Pine State on Saturday.

The highlights were the blueberry cornmeal pancakes, the honey butter on my crispy chicken sandwich and the apple pop tart that I ate the next day.

Pine State is a order first and then seat yourself establishment. The line often wraps around the block but it does move quickly. Both indoor and outdoor seating. One gender neutral restroom which seems dirty due to the graffiti but is clean. Be cautious when washing your hands as the water runs scalding hot at times but will cool down.""",
         stars=3, image_url='https://s3-media0.fl.yelpcdn.com/bphoto/uWrT5SjC3Y-e7vo-gmh3jQ/348s.jpg')

    db.session.add(rev1)
    db.session.add(rev2)
    db.session.add(rev3)
    db.session.add(rev4)
    db.session.add(rev5)
    db.session.add(rev6)
    db.session.add(rev7)
    db.session.add(rev8)
    db.session.add(rev9)
    db.session.add(rev10)
    db.session.add(rev11)
    db.session.add(rev12)
    db.session.add(rev13)
    db.session.add(rev14)
    db.session.add(rev15)
    db.session.add(rev16)
    db.session.add(rev17)
    db.session.add(rev18)
    db.session.add(rev19)
    db.session.add(rev20)
    db.session.add(rev21)
    db.session.add(rev22)
    db.session.add(rev23)
    db.session.add(rev24)
    db.session.add(rev25)
    db.session.add(rev26)
    db.session.add(rev27)
    db.session.add(rev28)
    db.session.add(rev29)
    db.session.add(rev30)
    db.session.add(rev31)
    db.session.add(rev32)
    db.session.add(rev33)
    db.session.add(rev34)
    db.session.add(rev35)
    db.session.add(rev36)
    db.session.add(rev37)
    db.session.add(rev38)
    db.session.add(rev39)
    db.session.add(rev40)
    db.session.add(rev41)
    db.session.add(rev42)
    db.session.add(rev43)
    db.session.add(rev44)
    db.session.add(rev45)
    db.session.add(rev46)
    db.session.add(rev47)
    db.session.add(rev48)
    db.session.add(rev49)
    db.session.add(rev50)
    db.session.add(rev51)
    db.session.add(rev52)
    db.session.add(rev53)
    db.session.add(rev54)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
