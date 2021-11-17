# Get path for dictionary (this can change with the operating system)
from pathlib import Path

def getDictPath():

    dictPath = Path.cwd() / 'test_flask_NEW_TEST' / 'Backend_Functions' / 'chordDictionaryNEW.json'

    return dictPath