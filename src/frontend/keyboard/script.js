const keys = document.querySelectorAll(".key")

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

function playNote(key){
    key.classList.add('active')
}