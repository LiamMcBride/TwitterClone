class User:
    def __init__(self, obj):
        self.id = obj["id"]
        self.username = obj["username"]
        self.firstName = obj["first-name"]
        self.lastName = obj["last-name"]
        self.timeStamp = obj["time-stamp"]
        self.email = obj["email"]


    def get_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "first-name": self.firstName,
            "last-name": self.lastName,
            "time-stamp": self.timeStamp,
            "email": self.email
        }



#id	userId	text	likes	interactions	saves	shares	timeStamp