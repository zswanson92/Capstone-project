from flask.cli import AppGroup
from .users import seed_users, undo_users
from .business import seed_businesses, undo_businesses
from .review import seed_reviews, undo_reviews
from .menu import seed_menus, undo_menus
from .menuitem import seed_menuitems, undo_menuitems


from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_businesses()
        undo_users()
        undo_reviews()
        undo_menus()
        undo_menuitems()
    seed_users()
    seed_businesses()
    seed_reviews()
    seed_menus()
    seed_menuitems()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_businesses()
    undo_users()
    undo_reviews()
    undo_menus()
    undo_menuitems()
    # Add other undo functions here
