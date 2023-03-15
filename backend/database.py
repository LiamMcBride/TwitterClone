import sqlite3
from user import User
from tweet import Tweet

class Database:
    #("YYYY-MM-DD HH:MM:SS.SSS")

    def __init__(self, database_name):
        self.conn = sqlite3.connect(database_name)
        self.cursor = self.conn.cursor()

    def create_users_table(self):
        self.cursor.execute('CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY, firstName TEXT, lastName TEXT, timestamp TEXT, email TEXT)')

    def insert_user(self, firstName, lastName, timestamp, email, username):
        self.cursor.execute('INSERT INTO Users (firstName, lastName, timestamp, email, username) VALUES (?, ?, ?, ?, ?)', (firstName, lastName, timestamp, email, username))
        self.conn.commit()
    
    def insert_tweet(self, tweet):
        self.cursor.execute('INSERT INTO Tweets (userId, content, timestamp) VALUES (?, ?, ?)', (tweet.userId, tweet.text, tweet.timeStamp))
        self.conn.commit()

    def get_tweet_and_user_by_tweet_id(self, tweetId):
        self.cursor.execute('select u.username, Tweets.content, Tweets.timestamp from Tweets inner join Users u on Tweets.userId = u.id where Tweets.id = ?;', (tweetId,))
        return self.cursor.fetchall()
    
    def get_all_tweets_by_user(self, userId):
        self.cursor.execute('select Tweets.id, Users.username, Tweets.content, Tweets.timestamp from Users inner join Tweets on Tweets.userId = Users.id where Users.id = ? order by date(Tweets.timestamp) DESC limit 50;', (userId,))
        return self.cursor.fetchall()

    def get_all_users(self):
        self.cursor.execute('SELECT * FROM Users')
        rows = self.cursor.fetchall()
        return rows

    def get_user_row_by_id(self, id):
        self.cursor.execute('SELECT * FROM Users WHERE id = ?', (id,))
        row = self.cursor.fetchone()
        return row
    
    def get_user_row_by_username(self, username):
        self.cursor.execute("SELECT * FROM Users WHERE username = '" + username + "'")
        row = self.cursor.fetchone()
        return row

    def update_user(self, id, firstName, lastName, timestamp, email, username):
        self.cursor.execute('UPDATE Users SET firstName = ?, lastName = ?, timestamp = ?, email = ?, username = ? WHERE id = ?', (firstName, lastName, timestamp, email, username, id))
        self.conn.commit()

    def delete_user(self, id):
        self.cursor.execute('DELETE FROM Users WHERE id = ?', (id,))
        self.conn.commit()

    def __del__(self):
        self.conn.close()
    
    def insert_user_from_class(self, user):
        self.insert_user(user.firstName,user.lastName,user.timeStamp,user.email, user.username)

    def get_all_tweets_by_user_object(self, userId):
        rows = self.get_all_tweets_by_user(userId)
        tweets = []
        for row in rows:
            tweets.append(Tweet(
                {
                    "id": row[0],
                    "user-id": userId,
                    "text": row[2],
                    "time-stamp": row[3]
                }).get_dict())
        return {
                "tweets": tweets,
                "user": self.get_user_by_id(userId).get_dict()
            }

    def get_user_by_id(self, id):
        row = self.get_user_row_by_id(id)

        if row == None:
            return User(
            {
                "id": id,
                "first-name": "",
                "last-name": "",
                "username": "",
                "email": "",
                "time-stamp": ""
            })

        return User(
            {
                "id": id,
                "first-name": row[1],
                "last-name": row[2],
                "username": row[5],
                "email": row[4],
                "time-stamp": row[3]
            })
    
    def get_user_by_username(self, username):
        row = self.get_user_row_by_username(username)
        if row == None:
            return User(
            {
                "id": id,
                "first-name": "",
                "last-name": "",
                "username": "",
                "email": "",
                "time-stamp": ""
            })

        return User(
            {
                "id": id,
                "first-name": row[1],
                "last-name": row[2],
                "username": row[5],
                "email": row[4],
                "time-stamp": row[3]
            })