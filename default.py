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

if str.lower(Q3_Answer) == "mercury":
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

Percentage_Decimal = CurrentScore/4
Percentage = Percentage_Decimal * 100

print("You got " + str(CurrentScore) + "/4 (" + str(Percentage) + "%) questions right")

if CurrentScore == 1:
    print("You need to study more")
elif CurrentScore == 2:
    print("You're halfway there!")
elif CurrentScore == 3:
    print("Nice!")
elif CurrentScore == 4:
      print("Congratulations!")  

