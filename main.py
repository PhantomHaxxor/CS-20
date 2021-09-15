import requests


Enabled = True

def GetOutfitsFromUserId(user_id):
    request = requests.get(f"https://avatar.roblox.com/v1/users/{user_id}/outfits")
    response = dict()

    if request.status_code == 200:
        response["status"] = True
        response["data"] = request.json()["data"]
    else:
        response["status"] = False
    return response

def GetFriendsFromUserId(user_id):
    request = requests.get(f"https://friends.roblox.com/v1/users/{user_id}/friends")
    response = dict()

    if request.status_code == 200:
        response["status"] = True
        response["data"] = request.json()["data"]
    else:
        response["status"] = False

    return response

def GetUserIdFromUsername(username):
    request = requests.post(
        url = "https://users.roblox.com/v1/usernames/users",
        data =  {
            "usernames": [
                username
            ],
            "excludeBannedUsers": True
        }
    )
    response = dict()
    response["status"] = False

    if request.status_code == 200:
        data_table = request.json()["data"]

        if data_table == None:
            response["status"] = False
        if data_table == None:
            response["status"] = False
        print(data_table[0])

        if data_table[0]: 
            response["status"] = True
            response["data"] = data_table[0]['id']
    else:
        response["status"] = False

    return response

while Enabled:
    username = input("What is your ROBLOX Username?: \n")
    
    UserIdResponse = GetUserIdFromUsername(username)
    if UserIdResponse["status"] == False:
        print("Error Getting Data from Username, please retry \n")
        continue
    user_id = UserIdResponse["data"]

    FriendsResponse = GetFriendsFromUserId(user_id)
    if FriendsResponse["status"] == False:
        print("Error Getting Friends Data, please retry \n")
        continue
    friends_data = FriendsResponse["data"]
    
    print("Your UserId: {user_id}".format(user_id = user_id))

    if len(friends_data) == 0:
        print(username + " does not have any friends")
    else:
        print("Here is your ROBLOX friends list: \n")
        for i in friends_data:
            print("Username: {username}, UserId: {userid}".format(username = i["name"], userid = i["id"]))

    answer = input("Do you want your outfit details (y/n): \n")
    if answer.lower() == "n":
        continue

    outfitsResponse = GetOutfitsFromUserId(user_id)
    if outfitsResponse["status"] == False:
        print("Error Getting Outfits Data, please retry \n")
        continue
    outfit_data = outfitsResponse["data"]
    
    print("\nHere is your Outfit Data\n")
    for i in outfit_data:
        print("Outfit Name: {outfit_name}".format(outfit_name = i["name"]))
    print("\n")

    
