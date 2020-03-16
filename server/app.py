from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/edit")
def edit():
    pass

@app.route("/get")
def get():
    pass


if __name__ == "__main__":
    app.run(port=5000)