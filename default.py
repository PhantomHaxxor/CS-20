

import math

A = int(input("What is A? "))
B = int(input("What is B? ")) 

C_Squared = math.pow(A, 2) + math.pow(B, 2)
C_Side = math.sqrt(C_Squared)

Length = round(C_Side, 2)
print("C Squareed is " + str(C_Squared) + ". The Length of the C Side is " + str(Length))