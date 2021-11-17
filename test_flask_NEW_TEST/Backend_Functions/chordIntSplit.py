import numpy as np

# Splits a 6 digit triad input input into individual note values
def chordIntSplit (chordInt, interval=2):
    chordInt = str(chordInt)
    split = np.array([])
    for k in range(0, len(chordInt), interval):
        split = np.append(split, int(chordInt[k:k + interval]))
    return split.astype(int)