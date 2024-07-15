const smallGroupRadio = document.getElementById('small-group');
const largeGroupRadio = document.getElementById('large-group');

smallGroupRadio.addEventListener('click', function() {
  if (smallGroupRadio.checked) {
    largeGroupRadio.checked = false;
  }
});

largeGroupRadio.addEventListener('click', function() {
  if (largeGroupRadio.checked) {
    smallGroupRadio.checked = false;
  }
});