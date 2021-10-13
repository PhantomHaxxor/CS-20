import json
import uuid

class new():
    def __init__(self):
        with open('data.json') as json_file:
            self.data = json.load(json_file)

    def get(self, key):
        if key in self.data:
            return self.data[key]
        else:
            return None

    def set(self, key, value):
        self.data[key] = value

    def save(self):
        with open("data.json", "w") as dataFile:
            self.dataFile = json.dump(self.data, dataFile)

    def attemptRegister(self, username, password):
        if not username or not password:
            return "EMPTY"
        print(self.get(username))
        # usernameFound = self.get(username)
        # if usernameFound == None:
        #     self.set(username, {
        #         ['password']: password,
        #         ["guid"]: uuid.uuid4(),
        #     })
        #     self.save()
        #     return True

        return False

    def attemptLogin(self, username, password):
        if not username or not password:
            return "EMPTY"
        return False