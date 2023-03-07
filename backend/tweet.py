class Tweet:
    def __init__(self, obj):
        self.id = obj["id"]
        self.userId = obj["user-id"]
        self.text = obj["text"]
        self.timeStamp = obj["time-stamp"]


    def get_dict(self):
        return {
            "id": self.id,
            "user-id": self.userId,
            "text": self.text,
            "time-stamp": self.timeStamp
        }

#id	userId	text	likes	interactions	saves	shares	timeStamp