from getBestInversion import getBestInversion
from firstChordInfo import firstChordInfo
import json

# Can input as many chords as you want
userInput = ['C#/Db Major Root Position', 'G Major', 'A Minor', 'F Major']
destinationChords = [firstChordInfo(userInput[0])]

# Populates destinationChords list with results
for i in range(len(userInput)-1):
    userInput[i] = userInput[i].replace("b", "-")
    temp = getBestInversion(destinationChords[i][1], userInput[i+1])
    destinationChords.append(temp)

# Output destination chords to JSON file
with open('Backend Functions\ccOutput.json', 'w') as outputWrite:
    json.dump(destinationChords, outputWrite)

#print(destinationChords)
#print()
#for i in range(len(userInput)):
#    print(destinationChords[i][3])