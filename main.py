import requests

username = input("What is your ROBLOX Name")
req = requests.post(
    url = "https://users.roblox.com/v1/usernames/users",
    data =  {
        "usernames": [
            username
        ],
        "excludeBannedUsers": False
    }
)
userData = req.json()
user_id = userData["data"]
print(user_id)

user_req = requests.get(f"https://users.roblox.com/v1/users/{user_id}")
user_data = user_req.json()

print("Name:", user_data["name"])
print("Display Name:", user_data["displayName"])
print("User ID:", user_data["id"])
print("Description:")
print(user_data["description"])

user_friend_req = requests.get(f"https://friends.roblox.com/v1/users/{user_id}/friends")
user_friend_data = user_friend_req.json()

friend_data = user_friend_data["data"]

for i in friend_data:
    print(i["name"])
