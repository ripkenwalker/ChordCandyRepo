// Store keyboard key names
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

// Get all key elements in the HTML
const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

// What happens when a key on the keyboard is clicked
keys.forEach(key => {
    // Play a note
    key.addEventListener('click', () => playNote(key))
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
    // play its file
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

// Play the note audio
function playNote(key) {
    // Get the audio filename for the note
    const noteAudio = document.getElementById(key.dataset.note)
    // Set the note to start
    noteAudio.currentTime = 0
    noteAudio.play()
    // Add an 'active' element to the classlist (for highlighting the keyboard)
    key.classList.add('active')
    // Add a listener for when the file finishes playing to remove the highlight
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}