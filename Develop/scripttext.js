//VARIABLES
//var eventCounter = 0;
var todayDate = moment().format("dddd LL");
//current hour in 24hr format
var currentTime = moment().format("H");
//array to hold each hour of the scheduler
var textAreaArray = $(".description");
var eventArray = [];

//display current date at the top of scheduler
$("#currentDay").replaceWith(todayDate);

//FUNCTIONS
//compare textarea ID to current time (24hr format)
var auditTime = function () {
  //loop through the textarea array variable
  for (var i = 0; i < textAreaArray.length; i++) {
    //get the id for each textarea
    var TimeID = textAreaArray[i].id;

    //get the textarea as a variable
    var textareaEl = document.getElementById(textAreaArray[i].id);

    //remove leftover classes from textareas
    $(textAreaArray).removeClass(".present .past .future");

    //add class depending on the comparison of assigned hour ID and current hour in 24hr format
    if (TimeID < currentTime) {
      $(textareaEl).addClass("past");
    } else if (TimeID > currentTime) {
      $(textareaEl).addClass("future");
    } else {
      $(textareaEl).addClass("present");
    }
  }
};

var textAreaInput = $(".description").val();
console.log(textAreaInput);

var saveEvent = function () {
  //var eventInput = $(".description").val();
  var eventID = $(".description");
  //console.log(eventInput);

  // var eventObj = {
  //     input: eventInput,
  //     //dataID:
  // }

  //eventArray.push(eventObj);
  //console.log(textAreaArray[0].innerHTML);
  for (var i = 0; i < textAreaInputArray.length; i++) {
    //debugger;
    //var eventID = i;
    var eventInput = textAreaInputsArray[i];
    console.log(eventInput);

    var saveObj = {
      //savedID: eventID,
      text: eventInput,
    };

    eventArray.push(saveObj);

    //eventText = $(".description").val();
  }
  console.log(eventArray);

  localStorage.setItem("events", JSON.stringify(eventArray));
};

var loadEvent = function () {
  savedEvent = localStorage.getItem("events");

  if (!savedEvent) {
    return false;
  }

  savedEvent = JSON.parse(loadEvents);
};

//EVENT LISTENERS
$(".saveBtn").click(saveEvent);

//run auditTime every 5 minutes
setInterval(auditTime(), 1000 * 60 * 5);
