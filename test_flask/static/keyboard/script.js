const chordDict = {"C": {"C Major": {"C Major Root Position": 485255, "C Major 1st Inversion": 525560, "C Major 2nd Inversion": 556062}, "C Minor": {"C Minor Root Position": 485155, "C Minor 1st Inversion": 515560, "C Minor 2nd Inversion": 556063}, "C Diminished": {"C Diminished Root Position": 485154, "C Diminished 1st Inversion": 515460, "C Diminished 2nd Inversion": 546063}, "C Augmented": {"C Augmented Root Position": 485256, "C Augmented 1st Inversion": 525660, "C Augmented 2nd Inversion": 566063}}, "C#/D-": {"C#/D- Major": {"C#/D- Major Root Position": 495356, "C#/D- Major 1st Inversion": 535661, "C#/D- Major 2nd Inversion": 566165}, "C#/D- Minor": {"C#/D- Minor Root Position": 495256, "C#/D- Minor 1st Inversion": 525661, "C#/D- Minor 2nd Inversion": 566164}, "C#/D- Diminished": {"C#/D- Diminished Root Position": 495255, "C#/D- Diminished 1st Inversion": 525561, "C#/D- Diminished 2nd Inversion": 556164}, "C#/D- Augmented": {"C#/D- Augmented Root Position": 495357, "C#/D- Augmented 1st Inversion": 535761, "C#/D- Augmented 2nd Inversion": 576165}}, "D": {"D Major": {"D Major Root Position": 505457, "D Major 1st Inversion": 545762, "D Major 2nd Inversion": 576266}, "D Minor": {"D Minor Root Position": 505357, "D Minor 1st Inversion": 535762, "D Minor 2nd Inversion": 576265}, "D Diminished": {"D Diminished Root Position": 505356, "D Diminished 1st Inversion": 535662, "D Diminished 2nd Inversion": 566265}, "D Augmented": {"D Augmented Root Position": 505458, "D Augmented 1st Inversion": 545862, "D Augmented 2nd Inversion": 586266}}, "D#/E-": {"D#/E- Major": {"D#/E- Major Root Position": 515558, "D#/E- Major 1st Inversion": 555863, "D#/E- Major 2nd Inversion": 586367}, "D#/E- Minor": {"D#/E- Minor Root Position": 515458, "D#/E- Minor 1st Inversion": 545863, "D#/E- Minor 2nd Inversion": 586366}, "D#/E- Diminished": {"D#/E- Diminished Root Position": 515457, "D#/E- Diminished 1st Inversion": 545763, "D#/E- Diminished 2nd Inversion": 545766}, "D#/E- Augmented": {"D#/E- Augmented Root Position": 515559, "D#/E- Augmented 1st Inversion": 555963, "D#/E- Augmented 2nd Inversion": 596367}}, "E": {"E Major": {"E Major Root Position": 525659, "E Major 1st Inversion": 565964, "E Major 2nd Inversion": 596468}, "E Minor": {"E Minor Root Position": 525559, "E Minor 1st Inversion": 555964, "E Minor 2nd Inversion": 596467}, "E Diminished": {"E Diminished Root Position": 525558, "E Diminished 1st Inversion": 555864, "E Diminished 2nd Inversion": 586467}, "E Augmented": {"E Augmented Root Position": 525660, "E Augmented 1st Inversion": 566064, "E Augmented 2nd Inversion": 485256}}, "F": {"F Major": {"F Major Root Position": 535760, "F Major 1st Inversion": 576065, "F Major 2nd Inversion": 485357}, "F Minor": {"F Minor Root Position": 535660, "F Minor 1st Inversion": 566065, "F Minor 2nd Inversion": 485356}, "F Diminished": {"F Diminished Root Position": 535659, "F Diminished 1st Inversion": 565965, "F Diminished 2nd Inversion": 596568}, "F Augmented": {"F Augmented Root Position": 535761, "F Augmented 1st Inversion": 576165, "F Augmented 2nd Inversion": 495357}}, "F#/G-": {"F#/G- Major": {"F#/G- Major Root Position": 545861, "F#/G- Major 1st Inversion": 586166, "F#/G- Major 2nd Inversion": 495458}, "F#/G- Minor": {"F#/G- Minor Root Position": 545761, "F#/G- Minor 1st Inversion": 576166, "F#/G- Minor 2nd Inversion": 495457}, "F#/G- Diminished": {"F#/G- Diminished Root Position": 545760, "F#/G- Diminished 1st Inversion": 576066, "F#/G- Diminished 2nd Inversion": 485760}, "F#/G- Augmented": {"F#/G- Augmented Root Position": 545862, "F#/G- Augmented 1st Inversion": 586266, "F#/G- Augmented 2nd Inversion": 505458}}, "G": {"G Major": {"G Major Root Position": 555962, "G Major 1st Inversion": 596267, "G Major 2nd Inversion": 505559}, "G Minor": {"G Minor Root Position": 555862, "G Minor 1st Inversion": 586267, "G Minor 2nd Inversion": 505558}, "G Diminished": {"G Diminished Root Position": 555861, "G Diminished 1st Inversion": 586167, "G Diminished 2nd Inversion": 495558}, "G Augmented": {"G Augmented Root Position": 555963, "G Augmented 1st Inversion": 596367, "G Augmented 2nd Inversion": 515559}}, "G#/A-": {"G#/A- Major": {"G#/A- Major Root Position": 566063, "G#/A- Major 1st Inversion": 485156, "G#/A- Major 2nd Inversion": 515660}, "G#/A- Minor": {"G#/A- Minor Root Position": 565963, "G#/A- Minor 1st Inversion": 596268, "G#/A- Minor 2nd Inversion": 505659}, "G#/A- Diminished": {"G#/A- Diminished Root Position": 565962, "G#/A- Diminished 1st Inversion": 596268, "G#/A- Diminished 2nd Inversion": 505659}, "G#/A- Augmented": {"G#/A- Augmented Root Position": 566064, "G#/A- Augmented 1st Inversion": 485256, "G#/A- Augmented 2nd Inversion": 525660}}, "A": {"A Major": {"A Major Root Position": 576164, "A Major 1st Inversion": 495257, "A Major 2nd Inversion": 525761}, "A Minor": {"A Minor Root Position": 576064, "A Minor 1st Inversion": 485257, "A Minor 2nd Inversion": 525760}, "A Diminished": {"A Diminished Root Position": 576063, "A Diminished 1st Inversion": 485157, "A Diminished 2nd Inversion": 515760}, "A Augmented": {"A Augmented Root Position": 576165, "A Augmented 1st Inversion": 495357, "A Augmented 2nd Inversion": 535761}}, "A#/B-": {"A#/B- Major": {"A#/B- Major Root Position": 586265, "A#/B- Major 1st Inversion": 505358, "A#/B- Major 2nd Inversion": 535862}, "A#/B- Minor": {"A#/B- Minor Root Position": 586165, "A#/B- Minor 1st Inversion": 495358, "A#/B- Minor 2nd Inversion": 525861}, "A#/B- Diminished": {"A#/B- Diminished Root Position": 586164, "A#/B- Diminished 1st Inversion": 495258, "A#/B- Diminished 2nd Inversion": 525861}, "A#/B- Augmented": {"A#/B- Augmented Root Position": 586266, "A#/B- Augmented 1st Inversion": 505458, "A#/B- Augmented 2nd Inversion": 545862}}, "B": {"B Major": {"B Major Root Position": 596366, "B Major 1st Inversion": 515459, "B Major 2nd Inversion": 545963}, "B Minor": {"B Minor Root Position": 596266, "B Minor 1st Inversion": 505459, "B Minor 2nd Inversion": 545962}, "B Diminished": {"B Diminished Root Position": 596265, "B Diminished 1st Inversion": 505359, "B Diminished 2nd Inversion": 535962}, "B Augmented": {"B Augmented Root Position": 596367, "B Augmented 1st Inversion": 515559, "B Augmented 2nd Inversion": 559963}}}

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

