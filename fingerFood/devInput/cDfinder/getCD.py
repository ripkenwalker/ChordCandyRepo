#imports
import os
import json



###Get the Chord Dictionary into a single dictionary object###

#Check if Dict exists
def doesDictExist(pathtoDict):
    if os.path.exists(pathtoDict):
        return True
    else:
        return False


#Get chordDict path and enter directory
def getchordDictdir():
    for n in range(2):
        if n < 2:
            pathN = os.getcwd()
            pNParent = os.path.dirname(pathN)
            os.chdir(pNParent)
            n = n + 1
    pathO = os.getcwd()
    pathF = pathO + "/fingerFood/chordBank"
    os.chdir(pathF)
    dirPath = pathF + '/chordDict.txt'
    if doesDictExist(dirPath):
        return os.getcwd() + '\chordDict.txt'
    else:
        open('chordDict.txt','x')
        return os.getcwd() + '\chordDict.txt'

#get the whole dictionary in one variable

def getDict(dir):
    with open(dir) as c:
        cDat = c.read()
    cD = json.loads(cDat)
    return cD

def getCD():
    cD = getDict(getchordDictdir())
    return cD

