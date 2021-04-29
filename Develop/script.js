function init() {
  // read loacl storage and assign to time slots
  addTimetoHeader();
  addColorToTimeSlot();
  // add event listener to save buttons
}

function addTimetoHeader() {
  // set time in header
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
  // can be used to constantly update time
  //   var interval = setInterval(colorUpdater, 30000);
}

function addColorToTimeSlot() {
  //get current hour, loop through row, add class appropriately
}

function getHourOfTheDay() {}

// start
init();

setInterval(addTimetoHeader), 1000;
