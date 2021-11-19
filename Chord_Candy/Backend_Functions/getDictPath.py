# Get path for dictionary (this can change with the operating system)
from pathlib import Path

def getDictPath():

    dictPath = Path.cwd() / 'Backend_Functions' / 'chordDictionary.json'

    return dictPath