import os
from flask import Flask, send_from_directory
from flask_restful import Api
from flask_cors import CORS  # comment this on deployment
from api.truth_table.TruthTableHandler import TruthTableHandler

app = Flask(__name__, static_url_path='', static_folder='./client/build')
CORS(app)  # comment this on deployment
api = Api(app)

@app.route("/", defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


api.add_resource(TruthTableHandler, '/api/truthtable')

if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000))
