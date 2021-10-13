function midiNoteToFrequency(note) {
    return Math.pow(2, ((note - 69) / 12)) * 440;
}