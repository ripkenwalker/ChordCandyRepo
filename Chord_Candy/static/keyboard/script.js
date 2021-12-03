// Available Chord Values
var chordNameSet = new Set()
var chordQualitySet = new Set()
var chordInversionSet = new Set()
// Selected Chord Values
var chordNames = []
var chordQualities = []
var chordInversion = ""

// Piano Keyboard Properties
// Store keyboard key names
const WHITE_KEYS = ['q','w','e','r','t','y','u','i','o','p','[',']','z', 'x', 'c', 'v', 'b', 'n', 'm',',','.']
const BLACK_KEYS = ['2','3','5','6','7','9','0','=','a','s','f','g','j','k','l']
// Tone.js Piano Sampler
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
}).toDestination()

// Get all key elements in the HTML (for the piano keyboard)
const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

// Get the toggle switches
const toggles = document.querySelectorAll(".form-check-input")

// What happens when a switch is clicked
toggles.forEach(toggle => {
    toggle.addEventListener('mousedown', () => toggleValue(toggle))
})
function toggleValue(toggle) {
    toggle.value = (toggle.value == 'on') ? 'off' : 'on'
}

// Piano Keyboard Functions
// Unfinished code for being able to do a glissando (with the mouse)
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
    sampler.triggerAttack(key.dataset.note)
}
// Release the note audio
function releaseNote(key) {
    const piano = document.querySelector('.piano')
    piano.removeEventListener('mousemove', trackMouse)
    key.classList.remove('active')
    sampler.triggerRelease(key.dataset.note)
}
function dropdownPlayNote(key_Index) {
    const key = keys[key_Index]
    key.classList.add('active')
    sampler.triggerAttack(key.dataset.note)
}
function dropdownReleaseNote(key_Index) {
    const key = keys[key_Index]
    key.classList.remove('active')
    sampler.triggerRelease(key.dataset.note)
}
// // Function for highligting selected JSON Chord
// function PlayJSON(key_Index) {
//     // key from script.js
//     const key = keys[key_Index]
//     key.classList.add('active')
//     sampler.triggerAttack(key.dataset.note)
// }

// Chord Functions (pre request to backend)
function setChordString(e) {
    var value = e.target.labels[0].innerText
    var selectedButtonID = e.target.id
    var buttonDetails = selectedButtonID.split("btnradio")
    var buttonIdentity = buttonDetails[1].split("-")
    var chordNum = buttonIdentity[0]
    var valueType = buttonIdentity[1][0]

    switch(valueType) {
        // User selected chord name
        case 'n':
            chordNames[chordNum] = value
            break
        // User selected chord quality
        case 'q':
            chordQualities[chordNum] = value
            break
        // User selected chord inversion (for first chord only)
        case 'i':
            chordInversion = value
            break
        default:
            break
    }
    getChordsReady()
}
// Prepare chords to be sent to the backend
function getChordsReady() {
    const chords = document.getElementsByClassName("chord-names")
    var chordList = []
    var i = 0
    while (i < chords.length) {
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

    sendChord(chordList)
}
// Traverse chord dictionary and find all possible chords
function getAvailableChordValues(obj) {
    for (let k in obj) {
        var chordDetails = k.split(" ")
        if (chordDetails.length == 4)
        {
            var chordName = chordDetails[0]
            var chordQuality = chordDetails[1]
            var chordInversion = chordDetails[2] + " " + chordDetails[3]
            chordNameSet.add("-n"+"type"+chordName)
            chordQualitySet.add("-q"+"type"+chordQuality)
            chordInversionSet.add("-i"+"type"+chordInversion)
        }
        if (typeof obj[k] === "object") {
            getAvailableChordValues(obj[k])
        }
    }
}
// Create selection buttons for all possible chord values
function populateAvailableChordValues(inputSet, chordNumber, chordCards) {
    var i = 0
    inputSet.forEach(function(chordValue) {
        var details = chordValue.split("type")
        var detailsType = details[0]
        var detailsValue = details[1]
        var buttonGroup;
        switch(detailsType) {
            case '-n':
                buttonGroup = chordCards[chordNumber].children[0]
                break
            case '-q':
                buttonGroup = chordCards[chordNumber].children[1]
                break
            case '-i':
                buttonGroup = chordCards[chordNumber].children[2]
                break
            default:
                break
        }
        const buttonInput = document.createElement("input")
        buttonInput.type = "radio"
        buttonInput.className = "btn-check"
        buttonInput.name = "btnradio" + detailsType + String(chordNumber)
        const id = "btnradio" + String(chordNumber) + detailsType + String(i)
        buttonInput.id = id
        buttonInput.autocomplete = "off"
        const buttonLabel = document.createElement("label")
        buttonLabel.className = "btn btn-outline-primary"
        buttonLabel.htmlFor = id
        buttonLabel.innerText = detailsValue
        buttonInput.addEventListener('input', setChordString)
        buttonGroup.appendChild(buttonInput)
        buttonGroup.appendChild(buttonLabel)
        i++
    })
}

// XML Request Functions
var getChordDict = function() {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load',getChordDictResponse)
    xhr.open('GET', '/chordDict', true)
    xhr.send()
}
var sendChord = function(inputChordList) {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load',sendChordResponse)
    

    chord1 = encodeURIComponent(inputChordList[0]);
    chord2 = encodeURIComponent(inputChordList[1]);
    chord3 = encodeURIComponent(inputChordList[2]);
    chord4 = encodeURIComponent(inputChordList[3]);


    xhr.open('GET', '/chordsend?chord1=' + chord1 + 
                    "&chord2=" + chord2 + 
                    "&chord3=" + chord3 + 
                    "&chord4=" + chord4, true);                   
    xhr.send();

    console.log(inputChordList)

}

// XML Response Functions
function getChordDictResponse(e) {
    var actual_JSON = JSON.parse(this.response)
    getAvailableChordValues(actual_JSON)
    const chords = document.getElementsByClassName("chord-names")
    var i = 0
    while (i < chords.length) {
        populateAvailableChordValues(chordNameSet, i, chords)
        populateAvailableChordValues(chordQualitySet, i, chords)
         // Add buttons with chord inversions only with first chord
        if (i < 1) {
            populateAvailableChordValues(chordInversionSet, i, chords)
        }
        i++
    }
}
function sendChordResponse(e){
    // console.log(this.response)
    var outTitle = "Inversions: "
    console.log(outTitle.concat('', JSON.parse(this.response)))
    response = JSON.parse(this.response)

    if (response[0][0] == undefined){
    } else {
        if (response[0][0] == "i"){

        } else {
        // Changes HTML text to match destination result
            const chordName1 = document.getElementById("chord-disp-1");
            chordName1.textContent = String(response[0][0]);

            const chordName2 = document.getElementById("chord-disp-2");
            chordName2.textContent = String(response[1][0]);

            const chordName3 = document.getElementById("chord-disp-3");
            chordName3.textContent = String(response[2][0]);

            const chordName4 = document.getElementById("chord-disp-4");
            chordName4.textContent = String(response[3][0]);

        }

        // Get Index value and pass each chord variables to dropdown_script.js
        const chord1 = response[0][2];
        const chord2 = response[1][2];
        const chord3 = response[2][2];
        const chord4 = response[3][2];
        getchord1(chord1)
        getchord2(chord2)
        getchord3(chord3)
        getchord4(chord4)
    }

}

function playChords() {
    const toggles = document.querySelectorAll(".form-check-input")
    var msTime = 0
    var i = 1
    toggles.forEach(toggle => {
        var chordId = "chord" + parseInt(i)
        if (toggle.value == 'on') {
            setTimeout(function(){document.getElementById(chordId).click();}, msTime);
            msTime += 1500
        }
        i += 1
    })
  }

getChordDict()