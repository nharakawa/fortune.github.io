//knowing 
// Get the modal
var knowingModal = document.getElementById("knowingModal");

// Get the button that opens the modal
var knowingBtn = document.getElementById("knowingBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("knowingClose")[0];

// When the user clicks on the button, open the modal
knowingBtn.onclick = function() {
  knowingModal.style.display = "block";
  console.log('clicked knowing');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  knowingModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == knowingModal) {
    knowingModal.style.display = "none";
  }
}

//happiness
// Get the modal
var happinessModal = document.getElementById("happinessModal");

// Get the button that opens the modal
var happinessBtn = document.getElementById("happinessBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("happinessClose")[0];

// When the user clicks on the button, open the modal
happinessBtn.onclick = function() {
  happinessModal.style.display = "block";
  console.log('clicked knowing');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  happinessModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == knowingModal) {
    happinessModal.style.display = "none";
  }
}

//plot
// Get the modal
var plotModal = document.getElementById("plotModal");

// Get the button that opens the modal
var plotBtn = document.getElementById("plotBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("plotClose")[0];

// When the user clicks on the button, open the modal
plotBtn.onclick = function() {
  plotModal.style.display = "block";
  console.log('clicked knowing');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  plotModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == plotModal) {
    plotModal.style.display = "none";
  }
}

//plot
// Get the modal
var manifestModal = document.getElementById("manifestModal");

// Get the button that opens the modal
var manifestBtn = document.getElementById("manifestBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("manifestClose")[0];

// When the user clicks on the button, open the modal
manifestBtn.onclick = function() {
  manifestModal.style.display = "block";
  console.log('clicked knowing');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  manifestModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == plotModal) {
    manifestModal.style.display = "none";
  }
}


