import math

# Quiz

CurrentScore = 0

# Question 1

Q1_Answer = input("What is 2 + 2? ")

if int(Q1_Answer) == 4:
    print("Correct!")
    CurrentScore += 1
else:
    print("Incorrect")

# Question 2

Q2_Answer = input("What is 5^2? ")

if int(Q2_Answer) == math.pow(5, 2):
    print("Correct!")
    CurrentScore += 1
else:
    print("Incorrect")

# Question 3

Q3_Answer = input("What is the smallest planet in our solar system? ")

if Q3_Answer == "Mercury":
    print("Correct!")
    CurrentScore += 1
else:
    print("Incorrect")

Q4_Answer = input("What is the scientific name for water? ")

if str.lower(Q4_Answer) == "h2o":
    print("Correct!")
    CurrentScore += 1
else:
    print("Incorrect")

print(CurrentScore)

if CurrentScore == 1:
    print("You got 1/4 | You need to study more")
elif CurrentScore == 2:
    print("You got 2/4 | You're halfway there!")
elif CurrentScore == 3:
    print("You got 3/4, Nice!")
elif CurrentScore == 4:
      print("You got 4/4, Congratulations!")  

