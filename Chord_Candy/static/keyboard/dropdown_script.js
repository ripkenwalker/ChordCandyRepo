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
const chord1_button = document.querySelector('#chord1');
const chord2_button = document.querySelector('#chord2');
const chord3_button = document.querySelector('#chord3');
const chord4_button = document.querySelector('#chord4');
// ... ... //

function getchord1(chord1) {
  chord1Val = []
  for (let i=0; i < chord1.length; i++) {
    chordInd = chord1[i]-36
    if (chordInd > 0) {
        chord1Val.push(chordInd)
    } else {
        chord1Val.push(chordInd+12)
    }
  }
}

function getchord2(chord2) {
  chord2Val = []
  for (let i=0; i < chord2.length; i++) {
    chordInd = chord2[i]-36
    if (chordInd > 0) {
        chord2Val.push(chordInd)
    } else {
        chord2Val.push(chordInd+12)
    }
  }
}

function getchord3(chord3) {
  chord3Val = []
  for (let i=0; i < chord3.length; i++) {
    chordInd = chord3[i]-36
    if (chordInd > 0) {
        chord3Val.push(chordInd)
    } else {
        chord3Val.push(chordInd+12)
    }
  }
}

function getchord4(chord4) {
  chord4Val = []
  for (let i=0; i < chord4.length; i++) {
    chordInd = chord4[i]-36
    if (chordInd > 0) {
        chord4Val.push(chordInd)
    } else {
        chord4Val.push(chordInd+12)
    }
  }
}

var check = new Boolean(false)
check = !check
chord1_button.addEventListener('click', e => {
  if (check){
    const allnotes = Array.from(Array(36).keys())
    for (let i = 0; i < allnotes.length; i++) {
      dropdownReleaseNote(allnotes[i])
    }
    for (let i = 0; i < chord1Val.length; i++) {
      dropdownPlayNote(chord1Val[i])
    }
  }
  else {
    for (let i = 0; i < chord1Val.length; i++) {
      dropdownPlayNote(chord1Val[i])
    }
    check = true
  }
})

chord2_button.addEventListener('click', e => {
  if (check){
    const allnotes = Array.from(Array(36).keys())
    for (let i = 0; i < allnotes.length; i++) {
      dropdownReleaseNote(allnotes[i])
    }
    for (let i = 0; i < chord2Val.length; i++) {
      dropdownPlayNote(chord2Val[i])
    }
  }
  else {
    for (let i = 0; i < chord2Val.length; i++) {
      dropdownPlayNote(chord2Val[i])
    }
    check = true
  }
})

chord3_button.addEventListener('click', e => {
  if (check){
    const allnotes = Array.from(Array(36).keys())
    for (let i = 0; i < allnotes.length; i++) {
      dropdownReleaseNote(allnotes[i])
    }
    for (let i = 0; i < chord3Val.length; i++) {
      dropdownPlayNote(chord3Val[i])
    }
  }
  else {
    for (let i = 0; i < chord3Val.length; i++) {
      dropdownPlayNote(chord3Val[i])
    }
    check = true
  }
})

chord4_button.addEventListener('click', e => {
  if (check){
    const allnotes = Array.from(Array(36).keys())
    for (let i = 0; i < allnotes.length; i++) {
      dropdownReleaseNote(allnotes[i])
    }
    for (let i = 0; i < chord4Val.length; i++) {
      dropdownPlayNote(chord4Val[i])
    }
  }
  else {
    for (let i = 0; i < chord4Val.length; i++) {
      dropdownPlayNote(chord4Val[i])
    }
    check = true
  }
})

// var check = new Boolean(false)
// CMaj.addEventListener('click', e => {
//   check = !check
//   if (check){
//     const allnotes = [0,1,2,3,4,5,6,7,8,9,10,11]
//     for (let i = 0; i < allnotes.length; i++) {
//       dropdownReleaseNote(allnotes[i])
//     }
//   }
//   else {
//     const notes = [0, 4, 7]
//     for (let i = 0; i < notes.length; i++) {
//       dropdownPlayNote(notes[i])
//     }
//   }
// })
// DMaj.addEventListener('click', e => {
//   check = !check
//   if (check){
//     const allnotes = [0,1,2,3,4,5,6,7,8,9,10,11]
//     for (let i = 0; i < allnotes.length; i++) {
//       dropdownReleaseNote(allnotes[i])
//     }
//   }
//   else {
//     const notes = [2, 6, 9]
//     for (let i = 0; i < notes.length; i++) {
//       dropdownPlayNote(notes[i])
//     }
//   }
// })
// EMaj.addEventListener('click', e => {
//   check = !check
//   if (check){
//     const allnotes = [0,1,2,3,4,5,6,7,8,9,10,11]
//     for (let i = 0; i < allnotes.length; i++) {
//       dropdownReleaseNote(allnotes[i])
//     }
//   }
//   else {
//     const notes = [4, 8, 11]
//     for (let i = 0; i < notes.length; i++) {
//       dropdownPlayNote(notes[i])
//     }
//   }
// })
// FMaj.addEventListener('click', e => {
//   check = !check
//   if (check){
//     const allnotes = Array.from(Array(36).keys()) // total of 36 keys
//     for (let i = 0; i < allnotes.length; i++) {
//       dropdownReleaseNote(allnotes[i])
//     }
//   }
//   else {
//     const notes = [5, 9, 12]
//     for (let i = 0; i < notes.length; i++) {
//       dropdownPlayNote(notes[i])
//     }
//   }
// })
// GMaj.addEventListener('click', e => {
//   check = !check
//   if (check){
//     const allnotes = Array.from(Array(36).keys()) // total of 36 keys
//     for (let i = 0; i < allnotes.length; i++) {
//       dropdownReleaseNote(allnotes[i])
//     }
//   }
//   else {
//     const notes = [7, 11, 14]
//     for (let i = 0; i < notes.length; i++) {
//       dropdownPlayNote(notes[i])
//     }
//   }
// })
// AMaj.addEventListener('click', e => {
//   check = !check
//   if (check){
//     const allnotes = Array.from(Array(36).keys()) // total of 36 keys
//     for (let i = 0; i < allnotes.length; i++) {
//       dropdownReleaseNote(allnotes[i])
//     }
//   }
//   else {
//     const notes = [9, 13, 16]
//     for (let i = 0; i < notes.length; i++) {
//       dropdownPlayNote(notes[i])
//     }
//   }
// })
// BMaj.addEventListener('click', e => {
//   check = !check
//   if (check){
//     const allnotes = Array.from(Array(36).keys()) // total of 36 keys
//     for (let i = 0; i < allnotes.length; i++) {
//       dropdownReleaseNote(allnotes[i])
//     }
//   }
//   else {
//     const notes = [11, 15, 18]
//     for (let i = 0; i < notes.length; i++) {
//       dropdownPlayNote(notes[i])
//     }
//   }
// })

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