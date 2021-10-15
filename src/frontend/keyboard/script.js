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
}

