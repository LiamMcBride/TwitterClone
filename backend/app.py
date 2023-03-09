import re
from datetime import datetime
from tweet import Tweet
from user import User

from flask import Flask, send_file

app = Flask(__name__)


@app.route("/")
def home():
    return "Hello, Flask!"


@app.route("/hello/<name>")
def hello_there(name):
    now = datetime.now()
    formatted_now = now.strftime("%A, %d %B, %Y at %X")

    # Filter the name argument to letters only using regular expressions. URL arguments
    # can contain arbitrary text, so we restrict to safe characters only.
    match_object = re.match("[a-zA-Z]+", name)

    if match_object:
        clean_name = match_object.group(0)
    else:
        clean_name = "Friend"

    content = "Hello there, " + clean_name + "! It's " + formatted_now
    
    return content

@app.route("/tweet/<id>")
def get_tweet(id):
    tweet = Tweet({"id": id, "user-id": "1033", "text": "Just an update, I have the flask server working finally!", "time-stamp": "03-03-2023 11:56:00"})
    user = User({"id": id, "first-name": "Liam", "last-name": "McBride", "username": "BlueLetter", "email": "mailmcbride56@gmail.com", "time-stamp": "03-03-2023 11:56:00"})
    
    retDict = {
        "tweet": tweet.get_dict(),
        "user": user.get_dict()
    }

    return retDict 

@app.route("/user/<id>")
def get_user(id):
    user = User({"id": id, "first-name": "Liam", "last-name": "McBride", "username": "BlueLetter", "email": "mailmcbride56@gmail.com", "time-stamp": "03-03-2023 11:56:00"})
    return user.get_dict()

@app.route("/image/<id>")
def get_image(id):
    return send_file("progile-img.png", mimetype='image/png')