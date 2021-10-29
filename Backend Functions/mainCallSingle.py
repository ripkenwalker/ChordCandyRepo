# Input one chord at a time into algorithm
from getBestInversion import getBestInversion

userInput = 'C#/Db Minor 1st Inversion'
userInput = userInput.replace("b", "-")
userDestination = 'D Major'

# Call entire function
fullOut = getBestInversion(userInput, userDestination)

#with open('algOutput.json', 'w') as outWrite:
#    json.dump(fullOut, outWrite)
print(fullOut)