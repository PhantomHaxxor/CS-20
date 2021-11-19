# SORT ANALYZER STARTER CODE

import time

# RETURN DATA FROM FILE AS AN ARRAY OF INTERGERS
def loadDataArray(fileName):
    temp = []

    # Read file line by line
    fileref = open(fileName, "r")
    for line in fileref:
        line = line.strip()  # Clean up line
        temp.append(int(line))  # Add integer to temp list

    fileref.close()

    return temp


# LOAD DATA FILE INTO GLOBAL VARIABLES
randomData = loadDataArray("data-files/random-values.txt")
reversedData = loadDataArray("data-files/reversed-values.txt")
nearlySortedData = loadDataArray("data-files/nearly-sorted-values.txt")
fewUniqueData = loadDataArray("data-files/few-unique-values.txt")

# VERIFY LOADED DATA BY PRINTING FIRST 50 ELEMENTS
# print(randomData[0:50])
# print(reversedData[0:50])
# print(nearlySortedData[0:50])
# print(fewUniqueData[0:50])

# def bubbleSort(anArray):
#     arrayLength = len(anArray)
#     for i in range(arrayLength - 1):
#         for j in range(arrayLength - 1 - i):
#             if anArray[j] > anArray[j+1]:
#                 anArray[j], anArray[j+1] = anArray[j+1], anArray[j]

# def selectionSort(anArray):
#     count = 0
#     for i in range(len(anArray) - 1):
#         minPosition = i
#         for j in range(i+1, len(anArray)):
#             if anArray[j] < anArray[minPosition]:
#                 minPosition = j
#                 count += 1
#         anArray[i], anArray[minPosition] = anArray[minPosition], anArray[i]
#     return count

def insertionSort(anArray):
    count = 0
    for i in range(1, len(anArray)):
        insertPos = i
        insertValue = anArray[i]
        while insertPos > 0 and anArray[insertPos - 1] > insertValue:
            anArray[insertPos] = anArray[insertPos - 1]
            insertPos -= 1
            count += 1
        anArray[insertPos] = insertValue
    return count
        
def TimedSort(sortFunc, anArray):
    startTime = time.time()
    count = sortFunc(anArray)
    endTime = time.time()
    return endTime - startTime, count

def doSort(sortFunc, array):
    timeTaken, count = TimedSort(sortFunc, array)
    print("{0:<25} {1:>10} {2:>10}".format(sortFunc.__name__, count, timeTaken))

doSort(insertionSort, randomData)
doSort(insertionSort, reversedData) 
doSort(insertionSort, nearlySortedData)
doSort(insertionSort, fewUniqueData)

