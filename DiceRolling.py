import random

def rollDice():
    print("-----------------------------------")
    print("Rolling Dice..")
    print("Dice Rolled: " + str(random.randint(1, 6)))
    print("-----------------------------------")

if __name__ == "__main__":
    while True:

        inputValue = str(input("Roll a Dice? (Y/N/Yes/No): ")).lower()

        if inputValue == "y" or inputValue == "yes":
            rollDice()
        elif inputValue == "n" or inputValue == "no":
            print("Bye!")
            break


