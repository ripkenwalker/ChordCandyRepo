# Chord Candy Dictionary Test
from nested_lookup import nested_lookup

print("-")
print("-")
# Creating an empty Dictionary
chordDict = {'C': 
                {'C Major': {
                    606467: 'C Major Root Position', 
                    646772: 'C Major 1st Inversion', 
                    677276: 'C Major 2nd Inversion'},
                
                'C Minor': {
                    606367: 'C Minor Root Postition',
                    676063: 'C Minor 1st Inversion',
                    636760: 'C Minor 2nd Inversion'},

                'C Diminished': {
                    606366: 'C Diminished Root Position',
                    666063: 'C Diminished 1st Inversion',
                    636660: 'C Diminished 2nd Inversion'},

                'C Augmented': {
                    606468: 'C Augmented Root Position',
                    686064: 'C Augmented 1st Inversion',
                    646860: 'C Augmented 2nd Inversion'}
                }
            }  
#print("Empty Dictionary: ")
#print(chordDict['C']['C Major'][606467])
#choice = chordDict.get('C', {}).get('C Major', {}).get(606467)

print(nested_lookup('C Major', chordDict))

#print(choice)