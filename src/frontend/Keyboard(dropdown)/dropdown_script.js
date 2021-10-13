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

const allKey = document.querySelectorAll('.key');
console.log(allKey);

const CMaj = document.querySelector('#CM');
CMaj.addEventListener('click', e => {
  const notes = ['C4', 'E4', 'G4']
  for (let i = 0; i < notes.length; i++) {
    playNote(notes[i])
  }
})

