#imports
from tkinter import *
from tkinter import ttk

fakedict = {"pizza": 123}

### Run the devInput program ###

##create single chord input
def cInputList(note, quality, inversion, vector):
    exp = [note, quality, inversion, vector]
    return exp

##create session class

class devSession:
    """Class that defines a session"""
    def __init__(self):
        self.confirm = "devSession is a class"
        
    
    #query
    def f(self):
        return 'hello world'


    #query handling

    #store input globally
    def initGlobal(self):
        global sList
        sList = []

    def add(self, addList):
        global sList
        sList = sList + [addList]
        return sList

    #finalize

    #list progress

    #delete input

    #send/update chordDict

    #push to repo

x = devSession()
x.initGlobal()
print(sList)
y = x.add(['uno','dos'])
print(y)
print(sList)



##create inputting window
class winInput(Toplevel):
    def __init__(self):
        Toplevel.__init__(self)
        self.geometry('200x600')
        self.frame1 = Frame(self, padx=2, borderwidth=10)
        self.frame2 = Frame(self)
        self.entry = Entry(self.frame1)
        self.button = Button(self.frame2, text="Get", command=self.testprint)
        self.frame1.grid(column=1)
        self.frame2.grid(column=0)
        self.entry.grid()
        self.button.grid()
    def testprint(self):
        print(self.entry.get())
        #### this times 4 for queries, then cInputList, 



##create startup window
class winParent(Tk):
    def __init__(self):
        #parent window
        Tk.__init__(self)
        #ttk frame
        self.frame = ttk.Frame(self, padding=130)
    
        self.welcome = Label(self.frame, text="Welcome to the Chord Dict Editor")

        #new session button
        self.newSession = Button(self.frame, text="Begin Input Session", command=self.new_session)

        #quit button
        self.terminate = ttk.Button(self.frame, text='Quit', command=self.destroy)

        #packs
        self.welcome.pack()
        self.newSession.pack()
        self.frame.pack()
        self.terminate.pack()


    def new_session(self):
        newS = winInput()
        newS.mainloop()



#function space



inWindow = winParent()

inWindow.mainloop()