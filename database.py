import json
import uuid

class new():
    def __init__(self):
        with open('data.json') as json_file:
            self.data = json.load(json_file)
            print(type(self.data))

    def get(self, key):
        return self.data[key]

    def set(self, key, value):
        self.data[key] = value
        self.save()

    def save(self):
        with open("data.json", "w") as dataFile:
            self.dataFile = json.dump(self.data, dataFile, sort_keys=True, indent=4)

    def doesAccountExist(self, username):
        return username in self.data

    def attemptRegister(self, username, password):
        if not username or not password:
            return "EMPTY"
        doesAccountExist = self.doesAccountExist(username)
        if doesAccountExist == False:
            self.set(username, {
                'password': password,
                "guid": str(uuid.uuid4()),
                'username': username,
            })
            return True

        return False

    def attemptLogin(self, username, password):
        if not username or not password:
            return "EMPTY"
        doesAccountExist = self.doesAccountExist(username)
        if doesAccountExist:
            accountData = self.get(username)
            if accountData['password'] == password:
                return True
        
        return False

currentDatabase = new()