import re
from datetime import datetime
from tweet import Tweet
from user import User
from database import Database
import json

from flask import Flask, send_file, request

app = Flask(__name__)


@app.route("/")
def home():
    return "Hello, Flask!"

@app.route("/tweet/<id>")
def get_tweet(id):
    tweet = Tweet({"id": id, "user-id": "1033", "text": "Just an update, I have the flask server working finally!", "time-stamp": "03-03-2023 11:56:00"})
    user = User({"id": id, "first-name": "Liam", "last-name": "McBride", "username": "BlueLetter", "email": "mailmcbride56@gmail.com", "time-stamp": "03-03-2023 11:56:00"})
    
    retDict = {
        "tweet": tweet.get_dict(),
        "user": user.get_dict()
    }

    return retDict 

@app.route("/publishtweet", methods=['POST', 'GET'])
def publish_tweet():
    data = request.get_json()
    tweet = Tweet({
        "id": -1,
        "user-id": data["userId"],
        "text": data["content"],
        "time-stamp": datetime.now().strftime("%m/%d/%Y %H:%M:%S")
    })
    print(data)

    db = Database("TwitterClone.db")
    db.insert_tweet(tweet)

    return data 

@app.route("/home", methods=['POST'])
def get_home():
    data = request.get_json()

    db = Database("TwitterClone.db")

    tweets = db.get_all_tweets_by_user_object(data["userId"])

    return tweets 




@app.route("/signup", methods=['POST', 'GET'])
def get_signup():
    data = request.get_json()
    now = datetime.now()
    user = User({"id": -1, "first-name": data["firstName"], "last-name": data["lastName"], "username": data["username"], "email": data["email"], "time-stamp": now.strftime("%m/%d/%Y %H:%M:%S")})

    db = Database("TwitterClone.db")
    db.insert_user_from_class(user)
    newUser = db.get_user_by_username(data["username"])
    return {"message": "User created"}

@app.route("/feed/<userid>")
def get_feed(userid):
    tweet = Tweet({"id": id, "user-id": "1033", "text": "Just an update, I have the flask server working finally!", "time-stamp": "03-03-2023 11:56:00"})
    user = User({"id": id, "first-name": "Liam", "last-name": "McBride", "username": "BlueLetter", "email": "mailmcbride56@gmail.com", "time-stamp": "03-03-2023 11:56:00"})
    
    retDict = {
        "tweet": tweet.get_dict(),
        "user": user.get_dict()
    }

    arr = [];
    arr.append(json.dumps(retDict))
    arr.append(json.dumps(retDict))
    arr.append(json.dumps(retDict))

    return json.dumps(arr)

@app.route("/user/<id>")
def get_user(id):
    db = Database("TwitterClone.db")
    # user = User({"id": id, "first-name": "Liam", "last-name": "McBride", "username": "BlueLetter", "email": "mailmcbride56@gmail.com", "time-stamp": "03-03-2023 11:56:00"})
    user = db.get_user_by_id(int(id))
    return user.get_dict()

@app.route("/image/<id>")
def get_image(id):
    return send_file("progile-img.png", mimetype='image/png')