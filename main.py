import mathLib

Enabled = True

def checkIfInt(x, y):
    try:
        aValue = int(x)
        bValue = int(y)
        return True, aValue, bValue
    except:
        print("Please Enter A Number")
        return False

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

    aValue = input("Enter the \"A\" value: ")
    bValue = input("Enter the \"B\" value: ") 

    state, a, b = checkIfInt(aValue, bValue)
    if state == False:
        continue

    if inputVal == 1:
        mathLib.add(a, b)
    elif inputVal == 2:
        mathLib.subtract(a, b)
    elif inputVal == 3:
        mathLib.multiply(a, b)
    elif inputVal == 4:
        mathLib.pythagorean(a, b)