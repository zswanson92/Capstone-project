from flask import Blueprint, jsonify
from flask_login import login_required
import os

map_routes = Blueprint('map', __name__)


# @map_routes.route('', methods=['POST'])
# # @login_required
# def load_map_key():
#     key = os.environ.get('REACT_APP_GOOGLE_MAPS_API_KEY')
#     return {'googleMapsAPIKey': key}
