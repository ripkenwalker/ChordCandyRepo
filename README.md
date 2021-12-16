# ChordCandyRepo
 Georgia Institute of Technology
 School of Music
 MUSI 3770: Chord Candy Group Repository

 Group Members: Joseph Mayton, Evan Murray, Yilong Tang, Ripken Walker

 Description: Chord Candy is a web application designed to educate the user on chordal movement and its relationship to chord inversions and finger movement. Chord Candy's goal is to calculate and display the most efficient path of movement when moving between chords. 

## Installation
Chord Candy runs on a server hosted locally on your machine. In order for the web application to function properly, a clone of this repository must exist on your machine, and the submodule Tone.js must be initialized.

First, in Git Bash or your preferred command line, run:

```
git clone --recursive https://ripkenwalker@github.com/ripkenwalker/ChordCandyRepo.git
```

which clones the repository on your machine. 

Next, navigate to the Tone.js submodule directory inside the <code>ChordCandyRepo</code> folder on your machine:

```
cd Chord_Candy/static/keyboard/Tone.js
```

once the Git Bash working directory ends with Tone.js, run the following commands:

```
npm install
```

and

```
npm run build
```

#### npm not found

If npm isn't recognized as a command, install NodeJs here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Last resort

You can download the release [here](https://github.com/ripkenwalker/ChordCandyRepo/releases/tag/v1.0.0) with <code>Tone.js</code> pre-built

## Running the Chord Candy application
Once Tone.js has been configured, the server will display the app using python's Flask web framework. Since you already have Git Bash
running, navigate back to wherever the /ChordCandyRepo is located on your machine. From there run:

```
python Chord_Candy/Chord_Candy_Server.py
```

which when operating properly will confirm that the server is running locally on port 8000.

Finally, in google chrome, navigate to:

 http://127.0.0.1:8000/static/keyboard/ChordCandy.html

Enjoy running Chord Candy on your machine, and press Ctrl+C within Git Bash to exit the server.
