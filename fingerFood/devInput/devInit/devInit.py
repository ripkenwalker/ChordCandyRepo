#imports
import git
import os


###Initiate ChordDict File Adding Program###

#Get Path
def getPath():
    repo = git.Repo('.', search_parent_directories=True)
    currentPath = repo.working_tree_dir
    return currentPath


#Create Repo Object
def repoObj():
    repository = git.Repo(getPath())
    return repository


#Check if Dict exists
def doesDictExist(pathtoDict):
    if os.path.exists(pathtoDict):
        return True
    else:
        return False


#Get chordDict path and enter directory
def getchordDictdir():
    for n in range(2):
        if n < 3:
            pathN = os.getcwd()
            pNParent = os.path.dirname(pathN)
            os.chdir(pNParent)
            n = n + 1
    pathO = os.getcwd()
    pathF = pathO + "\chordBank"
    os.chdir(pathF)
    dirPath = pathF + '\chordDict.txt'
    if doesDictExist(dirPath):
        return os.getcwd() + '\chordDict.txt'
    else:
        open('chordDict.txt','x')
        return os.getcwd() + '\chordDict.txt'

chordDictdir = getchordDictdir()
def appendToChordDict(istring):
    f = open(chordDictdir,'a')
    f.write(istring)
    f.close()
    g = open(chordDictdir,'r')
    return g.read()


print(os.getcwd())
