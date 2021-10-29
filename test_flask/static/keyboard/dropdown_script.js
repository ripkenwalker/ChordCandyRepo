function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

// Get all the keys
const allKey = document.querySelectorAll('.key');

// Get all the chords
const allChords = document.querySelectorAll('.chord');
const CMaj = document.querySelector('#CM');
const DMaj = document.querySelector('#DM');
const EMaj = document.querySelector('#EM');
const FMaj = document.querySelector('#FM');
const GMaj = document.querySelector('#GM');
const AMaj = document.querySelector('#AM');
const BMaj = document.querySelector('#BM');
// ... ... //

console.log(allChords)

// const chordsIndex = [[0, 4, 7],[2, 6, 9],[4, 8, 11],[6, 10, 1]]
// console.log(chordsIndex[0])

// for (i = 0; i < allChords.length; i++) {
//   allChords[i].addEventListener('click', e => {
//     // const notes = [0, 4, 7]
//     for (let j = 0; j < notes.length; j++) {
//       // dropdownPlayNote(notes[j])
//       dropdownPlayNote(chordsIndex[i][j])
//       console.log()
//     }
//   })
// }

var check = new Boolean(false)
CMaj.addEventListener('click', e => {
  check = !check
  if (check){
    const allnotes = [0,1,2,3,4,5,6,7,8,9,10,11]
    for (let i = 0; i < allnotes.length; i++) {
      dropdownReleaseNote(allnotes[i])
    }
  }
  else {
    const notes = [0, 4, 7]
    for (let i = 0; i < notes.length; i++) {
      dropdownPlayNote(notes[i])
    }
  }
})
DMaj.addEventListener('click', e => {
  check = !check
  if (check){
    const allnotes = [0,1,2,3,4,5,6,7,8,9,10,11]
    for (let i = 0; i < allnotes.length; i++) {
      dropdownReleaseNote(allnotes[i])
    }
  }
  else {
    const notes = [2, 6, 9]
    for (let i = 0; i < notes.length; i++) {
      dropdownPlayNote(notes[i])
    }
  }
})
EMaj.addEventListener('click', e => {
  check = !check
  if (check){
    const allnotes = [0,1,2,3,4,5,6,7,8,9,10,11]
    for (let i = 0; i < allnotes.length; i++) {
      dropdownReleaseNote(allnotes[i])
    }
  }
  else {
    const notes = [4, 8, 11]
    for (let i = 0; i < notes.length; i++) {
      dropdownPlayNote(notes[i])
    }
  }
})
FMaj.addEventListener('click', e => {
  check = !check
  if (check){
    const allnotes = Array.from(Array(36).keys()) // total of 36 keys
    for (let i = 0; i < allnotes.length; i++) {
      dropdownReleaseNote(allnotes[i])
    }
  }
  else {
    const notes = [5, 9, 12]
    for (let i = 0; i < notes.length; i++) {
      dropdownPlayNote(notes[i])
    }
  }
})
GMaj.addEventListener('click', e => {
  check = !check
  if (check){
    const allnotes = Array.from(Array(36).keys()) // total of 36 keys
    for (let i = 0; i < allnotes.length; i++) {
      dropdownReleaseNote(allnotes[i])
    }
  }
  else {
    const notes = [7, 11, 14]
    for (let i = 0; i < notes.length; i++) {
      dropdownPlayNote(notes[i])
    }
  }
})
AMaj.addEventListener('click', e => {
  check = !check
  if (check){
    const allnotes = Array.from(Array(36).keys()) // total of 36 keys
    for (let i = 0; i < allnotes.length; i++) {
      dropdownReleaseNote(allnotes[i])
    }
  }
  else {
    const notes = [9, 13, 16]
    for (let i = 0; i < notes.length; i++) {
      dropdownPlayNote(notes[i])
    }
  }
})
BMaj.addEventListener('click', e => {
  check = !check
  if (check){
    const allnotes = Array.from(Array(36).keys()) // total of 36 keys
    for (let i = 0; i < allnotes.length; i++) {
      dropdownReleaseNote(allnotes[i])
    }
  }
  else {
    const notes = [11, 15, 18]
    for (let i = 0; i < notes.length; i++) {
      dropdownPlayNote(notes[i])
    }
  }
})


// CMaj.addEventListener('mouseup', e => {
//   const allnotes = [0,1,2,3,4,5,6,7,8,9,10,11]
//   for (let i = 0; i < allnotes.length; i++) {
//     dropdownReleaseNote(allnotes[i])
//   }
// })

// DMaj.addEventListener('click', e => {
//   const notes = [2, 6, 9]
//   for (let i = 0; i < notes.length; i++) {
//     dropdownPlayNote(notes[i])
//   }
// })

// allChords[2].addEventListener('click', e => {
//   const notes = [4, 8, 11]
//   for (let i = 0; i < notes.length; i++) {
//     dropdownPlayNote(notes[i])
//   }
// })

// allChords[3].addEventListener('click', e => {
//   const notes = [6, 10, 1]
//   for (let i = 0; i < notes.length; i++) {
//     dropdownPlayNote(notes[i])
//   }
// })