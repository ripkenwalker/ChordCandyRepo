# Reverses chordIntSplit, will combine the individual note values back into a single integer
def chordIntCombine (input):
    combine = int(str(input[0]) + str(input[1]) + str(input[2]))
    return combine