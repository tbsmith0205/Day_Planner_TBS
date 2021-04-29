function init() {
  // read loacl storage and assign to time slots
  addTimetoHeader();
  addColorToTimeSlot();
  // add event listener to save buttons
}

function addTimetoHeader() {
  // set time in header
  var timeEl = document.getElementById("currentDay");
  timeEl.textContent = moment();
}

function addColorToTimeSlot() {
  //get current hour, loop through row, add class appropriately
}

function getHourOfTheDay() {}

// start
init();
