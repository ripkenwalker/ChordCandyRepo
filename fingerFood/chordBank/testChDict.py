Dict = {"C":{"Maj":{"Root":'000000',"First":'000000',"Second":'000000'}},"D":{}}
fedit = open('testChDict.txt','a')
fedit.write('test\n')
fedit.close()
f = open('testChDict.txt', 'r')
print(f.read())

