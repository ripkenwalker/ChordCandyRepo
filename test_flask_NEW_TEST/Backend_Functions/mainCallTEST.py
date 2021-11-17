#from Backend_Functions.getBestInversion import getBestInversion
#from Backend_Functions.firstChordInfo import firstChordInfo

from getBestInversion import getBestInversion
from firstChordInfo import firstChordInfo

import json


# Can input as many chords as you want
userInput = ['D Maj7 Root Position', 'G Maj7']
destinationChords = [firstChordInfo(userInput[0])]

nullCount = userInput.count('NULL')
destLength = len(userInput)-nullCount-1
# Populates destinationChords list with results
for i in range(destLength):
    userInput[i] = userInput[i].replace("b", "-")
    
    if userInput[i] == 'NULL':
        temp = 'NULL'
    else:
        temp = getBestInversion(destinationChords[i][1], userInput[i+1])
        
    destinationChords.append(temp)

# Output destination chords to JSON file
#with open('Beach_Server\Backend_Functions\ccOutput.json', 'w') as outputWrite:
#    json.dump(destinationChords, outputWrite)

#print(destinationChords)

#print()
for i in range(len(userInput)):
    print(destinationChords[i][2])
    print(destinationChords[i][3])
    print(destinationChords[i][4])