// when this DOM is done loading, then call everything within this function
$(document).ready(function () {
  //write all of our jQuery inside this function
  // display the date to the user
  // grab reference to element that we want the time to be displayed on
  var currentDay = $("#currentDay");
  //display the current day in that p element
  currentDay.text(moment().format("dddd, MMM Do"));


  //functions
  // function will be responsible for checking the time and determining what class to add - past,present,or future
  function checkTime() {
    // grab the current hour using moment.js
    var currentHour = moment().hours();

    // need to grab the hours for the time-block
    // loop through the time-block hours
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

     // check the currentHour against blockHour
    // if else
      if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if(blockHour === currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
  });
    

  checktime();

  //event handlers
  $(".saveBtn").on("click", function () {
    //capture information that user inputted and store that info into local storage

    // need to capture the value of that input and also need to know what time block it's attached to
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // save info to local storage
    localStorage.setItem(time, value);
  });

  // display the items that are in local storage into the timeblocks
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));

  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
};

// function init() {
//   // read loacl storage and assign to time slots
//   addTimetoHeader();
//   addColorToTimeSlot();
//   // add event listener to save buttons
// }

// // function addTimetoHeader() {
// //   // set time in header
// //   var timeEl = document.getElementById("currentDay");
// //   timeEl.textContent = moment();
// //   // can be used to constantly update time
// //   //   var interval = setInterval(colorUpdater, 30000);
// //   var timeEl = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
// //   timeEl.text(rightNow);
// // }

// function addColorToTimeSlot() {
//   //get current hour, loop through row, add class appropriately
// }

// function getHourOfTheDay() {}

// // start
// init();

// setInterval(addTimetoHeader), 1000;
