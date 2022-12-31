from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', fullname='demo mcdemerson', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', fullname='marnie marie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', fullname='ricky bobbie', email='bobbie@aa.io', password='password')
    gem = User(
        username='gem', fullname='jordan warlock', email='gemstone@aa.io', password='password')
    vet = User(
        username='vestesto', fullname='jorge maxwell', email='vetesto@aa.io', password='password')
    aura = User(
        username='aura', fullname='brandon mcrogue', email='berndurn@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(gem)
    db.session.add(vet)
    db.session.add(aura)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
