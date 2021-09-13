import math

Enabled = True

def pythagorean():
    print("Welcome to Pythagorean Theorum Calculator")
    aValue = input("Enter the \"A\" value")
    bValue = input("Enter the \"B\" value") 

    try:
        aValue = int(aValue)
        bValue = int(bValue)
       
        def calculate(a, b):
            aSquared = a**2
            bSquared = b**2
           
            return round(math.sqrt(aSquared + bSquared))
        print(calculate(aValue, bValue))
    except:
        print("Please Enter A Number")


while Enabled:
    print("Welcome to a Calculator")
    print("Please input your action")
    print("1 - Add")
    print("2 - Subtract")
    print("3 - Multiply")
    print("4 - Pythagorean Theorum")

    inputVal = input("Input Number: ")

    try:
        inputVal = int(inputVal)
    except:
        print("Please Enter A Number")

    if inputVal == 1:
        print("WIP 1")
    elif inputVal == 2:
        print("WIP 2")
    elif inputVal == 3:
        print("WIP 3")
    elif inputVal == 4:
        pythagorean()

