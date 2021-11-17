var send_request = function() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load',handle_response)
    xhr.open('GET', '/chordDict', true);                   
    xhr.send();
};

var chordNames = []
var chordQualities = []
var chordInversion = ""

function setChordString(e) {
    var value = e.target.labels[0].innerText
    var buttonId = e.target.id
    var preNum = buttonId.split("btnradio")
    var preNum2 = preNum[1].split("-")
    var chordNum = preNum2[0]
    var valueType = preNum2[1][0]

    switch(valueType) {
        case 'n':
            chordNames[chordNum] = value
            break
        case 'q':
            chordQualities[chordNum] = value
            break
        case 'i':
            chordInversion = value
            break
        default:
            break
    }
}

function getChordsReady() {
    const buttonGroups = document.getElementsByClassName("chord-names")
    var chordList = []
    var i = 0
    while (i < buttonGroups.length) {
        if (i == 0) {
            if (chordNames[i] != undefined && chordQualities[i] != undefined && chordInversion != "") {
                chordList[i] = chordNames[i] + " " + chordQualities[i] + " " + chordInversion
            } else {
                console.log("Please make sure to click a value on all the buttons!")
            }
        }
        else {
            if (chordNames[i] != undefined && chordQualities[i] != undefined) {
                chordList[i] = chordNames[i] + " " + chordQualities[i]
            } else {
                console.log("Please make sure to click a value on all the buttons!")
            }
        }
        i++
    }
    console.log(chordList)
}

function handle_response(e) {
    var actual_JSON = JSON.parse(this.response);
    var data = Object.keys(actual_JSON);
    var data2 = Object.values(actual_JSON);
    var data3 = Object.keys(data2[0])
    var data4 = Object.values(data2[0])
    var data5 = Object.keys(data4[0])
    var i = 0;
    const buttonGroups = document.getElementsByClassName("chord-names")
    // Add buttons with Chord Names -- from the chord dictionary
    while (i < buttonGroups.length) {
        for (i2 = 0; i2 < data.length; i2++) {
            const buttonGroup = buttonGroups[i].children[0]
            const buttonInput = document.createElement("input")
            buttonInput.type = "radio"
            buttonInput.className = "btn-check"
            buttonInput.name = "btnradio" + String(i)
            const id = "btnradio" + String(i) + "-n" + String(i2)
            buttonInput.id = id
            buttonInput.autocomplete = "off"
            const buttonLabel = document.createElement("label")
            buttonLabel.className = "btn btn-outline-primary"
            buttonLabel.htmlFor = id
            buttonLabel.innerText = data[i2]
            buttonInput.addEventListener('input', setChordString)
            buttonGroup.appendChild(buttonInput)
            buttonGroup.appendChild(buttonLabel)
        }
        // Add buttons with Chord Qualities -- from the chord dictionary
        for (i3 = 0; i3 < data3.length; i3++) {
            var text = data3[i3]
            const myArray = text.split(" ")

            const buttonGroup = buttonGroups[i].children[1]
            var quality = myArray[1]
            const buttonInput = document.createElement("input")
            buttonInput.type = "radio"
            buttonInput.className = "btn-check"
            buttonInput.name = "btnradio" + "-q" + String(i)
            const id = "btnradio" + String(i) + "-q" + String(i3)
            buttonInput.id = id
            buttonInput.autocomplete = "off"
            const buttonLabel = document.createElement("label")
            buttonLabel.className = "btn btn-outline-primary"
            buttonLabel.htmlFor = id
            buttonLabel.innerText = quality
            buttonInput.addEventListener('input', setChordString)
            buttonGroup.appendChild(buttonInput)
            buttonGroup.appendChild(buttonLabel)
        }
         // Add buttons with Chord Inversions (only with first chord) -- from the chord dictionary
        if (i < 1) {
            for (i4 = 0; i4 < data5.length; i4++) {
                var text = data5[i4]
                const myArray = text.split(" ")
    
                const buttonGroup = buttonGroups[i].children[2]
                var inversion = myArray[2] + " " + myArray[3]
                const buttonInput = document.createElement("input")
                buttonInput.type = "radio"
                buttonInput.className = "btn-check"
                buttonInput.name = "btnradio" + "-i" + String(i)
                const id = "btnradio" + String(i) + "-i" + String(i4)
                buttonInput.id = id
                buttonInput.autocomplete = "off"
                const buttonLabel = document.createElement("label")
                buttonLabel.className = "btn btn-outline-primary"
                buttonLabel.htmlFor = id
                buttonLabel.innerText = inversion
                buttonInput.addEventListener('input', setChordString)
                buttonGroup.appendChild(buttonInput)
                buttonGroup.appendChild(buttonLabel)
            }
        }
        i++
    }
}
send_request();

// Tone.js piano sampler
const sampler = new Tone.Sampler({
    urls: {
        A0: "A0.mp3",
        C1: "C1.mp3",
        "D#1": "Ds1.mp3",
        "F#1": "Fs1.mp3",
        A1: "A1.mp3",
        C2: "C2.mp3",
        "D#2": "Ds2.mp3",
        "F#2": "Fs2.mp3",
        A2: "A2.mp3",
        C3: "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        A3: "A3.mp3",
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
        C5: "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        A5: "A5.mp3",
        C6: "C6.mp3",
        "D#6": "Ds6.mp3",
        "F#6": "Fs6.mp3",
        A6: "A6.mp3",
        C7: "C7.mp3",
        "D#7": "Ds7.mp3",
        "F#7": "Fs7.mp3",
        A7: "A7.mp3",
        C8: "C8.mp3"
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/"
}).toDestination();

// Store keyboard key names
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']


// Get all key elements in the HTML
const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

function trackMouse(e) {
    //var rect = e.target.getBoundingClientRect()
    //console.log(rect)
}

// What happens when a key on the keyboard is clicked
keys.forEach(key => {
    // Play a note
    key.addEventListener('mousedown', () => playNote(key))
    key.addEventListener('mouseup', () => releaseNote(key))
})

// What happens when a key on the computer keyboard is pressed
document.addEventListener('keydown', e => {
    // If the key is held down, exit the function
    if (e.repeat) return

    // Get the computer keyboard event
    const key = e.key

    // Check which key on the computer keyboard is pressed
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    // If a key was found, get this key in the HTML element and
    // play its pitch
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

//What happens when a key on the computer keyboard is released
document.addEventListener('keyup', e => {
    // Get the computer keyboard event
    const key = e.key
    // Check which key on the computer keyboard is released
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    // If a key was found, get this key in the HTML element and
    // release its pitch
    if (whiteKeyIndex > -1) releaseNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) releaseNote(blackKeys[blackKeyIndex])
})

// Play the note audio
function playNote(key) {
    const piano = document.querySelector('.piano')
    piano.addEventListener('mousemove', trackMouse)
    key.classList.add('active')
    sampler.triggerAttack(key.dataset.note);
}

function dropdownPlayNote(key_Index) {
    const key = keys[key_Index]
    key.classList.add('active')
    sampler.triggerAttack(key.dataset.note)
}

// Release the note audio
function releaseNote(key) {
    const piano = document.querySelector('.piano')
    piano.removeEventListener('mousemove', trackMouse)
    key.classList.remove('active');
    sampler.triggerRelease(key.dataset.note);
}

function dropdownReleaseNote(key_Index) {
    const key = keys[key_Index]
    key.classList.remove('active');
    sampler.triggerRelease(key.dataset.note);
}

