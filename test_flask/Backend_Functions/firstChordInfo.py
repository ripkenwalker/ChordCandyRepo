# Modified version of getBestInversion that will change the input chord 
# to be in the format of the destination chords
from nested_lookup import nested_lookup
import numpy as np
import json
from music21 import *
from Backend_Functions.chordIntSplit import chordIntSplit
from Backend_Functions.getDictPath import getDictPath

with open(getDictPath(), 'r') as dictOpen:
    nameToNum = json.load(dictOpen)

def firstChordInfo(inputChord):

    inChord = inputChord.replace("b", "-")

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
    
    # Convert MIDI note numbers to Scientific Pitch Notation (ex. 60 -> C4)

    destinationName = inputChord
    outputCode = inputNum
    outputSplit = inputSplit

    outputPitch = np.zeros([len(outputSplit)], dtype=object)
    for i in range(len(outputSplit)):
        convert = str(pitch.Pitch(outputSplit.astype(int)[i]))
        outputPitch[i] = convert.replace("-", "b")
    
    magnitudeCalc = 0
    

    return destinationName, outputCode, outputSplit.tolist(), outputPitch.tolist(), magnitudeCalc