from app.models import db, Review, environment, SCHEMA


def seed_reviews():
    rev1 = Review(
        user_id='2', business_id='1', body='I LOOOOOOOOVE me some WINGSTOP. Its super fire, honey bbq all day everyday.',
         stars=5, image_url='')
    rev2 = Review(
        user_id='3', business_id='1', body='The chicken was just OK, my fries were kind of soggy, would rec a lot of other chicken spots',
         stars=3, image_url='https://qph.cf2.quoracdn.net/main-qimg-225157209bccb71cc29b1a15166300c2-lq')
    rev3 = Review(
        user_id='1', business_id='2', body='Honestly a terrible experience, my register worker threw the change onto the counter rudely, will never have another whopper again!',
         stars=1, image_url='')
    rev4 = Review(
        user_id='3', business_id='2', body='It was ok. I mean its fast food, people getting served food by people making these types of wages have way too high of an expectation. Go to a restaraunt nerds.',
         stars=4, image_url='https://static.independent.co.uk/2022/03/31/14/burger%20king%20whopper%20%281%29.jpg?width=1200')
    rev5 = Review(
        user_id='1', business_id='3', body='This place is fantastic. Service is very fast, and they have an extensive menu that I have yet to have a bad experience with. Chili cheese fries are insane!',
         stars=5, image_url='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/01/26/KC2706_Nunya-Business-Chili-Cheese-Fries_s4x3.jpg.rend.hgtvcom.616.462.suffix/1611692825462.jpeg')
    rev6 = Review(
        user_id='2', business_id='3', body='I have been eating here since high school, where I went to about a block away. I used to have this every week for lunch, insanely delicious. Never a bad experience, highly recommend.',
         stars=5, image_url='')

    db.session.add(rev1)
    db.session.add(rev2)
    db.session.add(rev3)
    db.session.add(rev4)
    db.session.add(rev5)
    db.session.add(rev6)
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
