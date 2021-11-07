from nested_lookup import nested_lookup
import numpy as np
from music21 import *
import json
from Backend_Functions.chordIntSplit import chordIntSplit
from Backend_Functions.chordIntCombine import chordIntCombine

with open('Beach_Server\Backend_Functions\chordDictionary.json', 'r') as dictOpen:
    nameToNum = json.load(dictOpen)

def getBestInversion(inChord, destChord):
    if type(inChord) is str:
        r = nested_lookup(inChord, nameToNum)
        try:
            inputNum = r[0]
        except IndexError:
            z = 'inChord has an invalid string (string is case sensitive)'
            return z
    elif type(inChord) is int:
        if len(str(inChord)) != 6:
            z = 'inChord vector spelling requires a six digit integer'
            return z
        else:
            inputNum = inChord
    else:
        z = 'inChord must be a chord vector integer or a string with a chord name found within nameToNum'
        return z
    try:
        inputSplit = np.array(chordIntSplit(inputNum))
    except ValueError:
        z = 'inChord taken as a string must include note, type, and inversion'
        return z
    # print(inputSplit)
    if type(destChord) is str:
        pass
    else:
        z = 'destChord must be a string, note name followed by quality'
        return z
    destChord = destChord.replace("b", "-")
    destNums = nested_lookup(key = destChord, document = nameToNum, wild = True, with_keys= False)

    # Initialize arrays
    lookupArray = np.zeros(9)
    magArray = np.zeros(9)
    nameArray = np.zeros(9, dtype=object)
    num = 0

    # Make list of inversions
    for n in destNums[0]:
        nIndex = num*3
        nameArray[nIndex:(nIndex+3)] = n
        num += 1

    for n in range(0, len(destNums)-1):
        arrayIndex = n*3
        # Split destination chord into separate note values for comparison
        destTest = np.array(chordIntSplit(destNums[n+1]))
        lookupArray[arrayIndex] = chordIntCombine(destTest)
        magArray[arrayIndex] = np.sum(np.abs(destTest - inputSplit))

    # Look at octave above and octave below
        upOct = destTest + 12
        lookupArray[arrayIndex+1] = chordIntCombine(upOct)
        magArray[arrayIndex+1] = np.sum(np.abs(upOct - inputSplit))
        
        downOct = destTest - 12
        lookupArray[arrayIndex+2] = chordIntCombine(downOct)
        magArray[arrayIndex+2] = np.sum(np.abs(downOct - inputSplit))

    # Combines the names with the corresponding magnitude calculation
    combArr = np.column_stack((magArray, nameArray))

    # Finds the index of the smallest magnitude of change
    minVal = np.argmin(magArray)

    #Finds the chord name for the smallest magnitude
    destinationName = combArr[minVal][1]
    # Replace dash in dictionary name with more readable "b" 
    destinationName = destinationName.replace("-", "b")
    # Find chord string of output
    outputCode = int(lookupArray[minVal])
    # Split the output into three separate note values
    outputSplit = chordIntSplit(outputCode)
    # Assign the minimum value of magnitude change to variable for function output
    magnitudeCalc = int(combArr[minVal][0])

    if magnitudeCalc == 1:
        magnitudeCalc = str('1 Semitone')
    else:
        magnitudeCalc = str(magnitudeCalc) + " Semitones"

    # Convert MIDI note numbers to Scientific Pitch Notation (ex. 60 -> C4)
    outputPitch = np.zeros([len(outputSplit)], dtype=object)
    for i in range(len(outputSplit)):
        convert = str(pitch.Pitch(outputSplit.astype(int)[i]))
        outputPitch[i] = convert.replace("-", "b")

    #print("Input Notes: ", inputSplit)
    #print("Output Notes: ", outputSplit)
    #print("Magnitude of Change: ", magnitudeCalc, "Semitone(s)")
    #if type(inChord) is str:
    #    print("Input Chord Name: ", inChord)
    #else:
    #    ic = 'TRY TO FIND THE CHORD IN THE DICTIONARY HERE'
    #print("Destination Chord Name: ", destinationName)


              
    return destinationName, outputCode, outputSplit.tolist(), outputPitch.tolist(), magnitudeCalc

