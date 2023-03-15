import random
import string
import json
from datetime import datetime
from tweet import Tweet
from database import Database

tweets = []
db = Database('TwitterClone.db')

for i in range(500):
    tweet_obj = {
        "id": -1,
        "user-id": 1,
        "text": ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase + string.digits, k=20)),
        "time-stamp": "{month:02}-{day:02}-{year:04} {hour:02}:{min:02}:{sec:02}".format(month = random.randrange(1, 13), day = random.randrange(1, 30), year = random.randrange(2015, 2024), hour = random.randrange(0, 24), min = random.randrange(0, 60), sec = random.randrange(0, 60))
        #%m-%d-%Y %H:%M:%S
    }
    tweet = Tweet(tweet_obj)
    tweets.append(tweet)

for twt in tweets:
    db.insert_tweet(twt)
