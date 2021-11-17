# Get path for dictionary (this can change with the operating system)
from pathlib import Path

def getDictPath():

    dictPath = Path.cwd() / 'test_flask' / 'Backend_Functions' / 'chordDictionary.json'

    return dictPath