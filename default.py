# libraries
import random

loop = True

def Roll_Dice(times):
    if times == "Until Snake Eyes":
        loop = True
        RollNum = 1
        while loop:
            First_Die = random.randrange(1, 6)
            Second_Die = random.randrange(1, 6)
            
            print("First Die Rolled: " + str(First_Die) + " The Second Die Rolled: " + str(Second_Die))
            RollNum += 1

            if First_Die == 1 and Second_Die == 1:
                loop = False
                print("Snake Eyes! It took: " + str(RollNum) + " rolls to get Snake Eyes!")
    else:
        loop = 1
        while loop <= times:
            First_Die = random.randrange(1, 6)
            Second_Die = random.randrange(1, 6)
            
            print("First Die Rolled: " + str(First_Die) + " The Second Die Rolled: " + str(Second_Die))

            loop += 1
    
while loop:
    print("Dice Roll Simulator Menu")
    print("1. Roll Dice Once")
    print("2. Roll Dice 5 Times")
    print("3. Roll Dice ‘n’ Times")
    print("4. Roll Dice until Snake Eyes")
    print("5. Exit")
    print("Select an option from the menu (1-5):")

    Selected = int(input("Enter Selection (1-5): "))

    if Selected == 1:
        Roll_Dice(1)
    elif Selected == 2:
        Roll_Dice(5)
    elif Selected == 3:
        times = int(input("Enter how many times to roll the Dice "))
        Roll_Dice(times)
    elif Selected == 4:
        Roll_Dice("Until Snake Eyes")
    elif Selected == 5:
        print("Exited from Dice Roll Simulator Menu")
        loop = False