//VARIABLES
var todayDate = moment().format("dddd LL");
//current hour in 24hr format
var currentTime = moment().format("H");
//array to hold each hour of the scheduler
var textAreaArray = $(".description");

//display current date at the top of scheduler
$("#currentDay").html(todayDate);

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

var loadEvents = function () {
  var nine = localStorage.getItem("9am");
  $("#09").html(nine);
  var ten = localStorage.getItem("10am");
  $("#10").html(ten);
  var eleven = localStorage.getItem("11am");
  $("#11").html(eleven);
  var twelve = localStorage.getItem("12pm");
  $("#12").html(twelve);
  var one = localStorage.getItem("1pm");
  $("#13").html(one);
  var two = localStorage.getItem("2pm");
  $("#14").html(two);
  var three = localStorage.getItem("3pm");
  $("#15").html(three);
  var four = localStorage.getItem("4pm");
  $("#16").html(four);
  var five = localStorage.getItem("5pm");
  $("#17").html(five);
};

//EVENT LISTENERS
$(".saveBtn1").on("click", function () {
    var textAreaInput = $(".9am").val();
    localStorage.setItem("9am", textAreaInput);
});

$(".saveBtn2").on("click", function () {
    var textAreaInput = $(".10am").val();
    localStorage.setItem("10am", textAreaInput);
});

$(".saveBtn3").on("click", function () {
  var textAreaInput = $(".11am").val();
  localStorage.setItem("11am", textAreaInput);
});

$(".saveBtn4").on("click", function () {
  var textAreaInput = $(".12pm").val();
  localStorage.setItem("12pm", textAreaInput);
});

$(".saveBtn5").on("click", function () {
  var textAreaInput = $(".1pm").val();
  localStorage.setItem("1pm", textAreaInput);
});

$(".saveBtn6").on("click", function () {
  var textAreaInput = $(".2pm").val();
  localStorage.setItem("2pm", textAreaInput);
});

$(".saveBtn7").on("click", function () {
  var textAreaInput = $(".3pm").val();
  localStorage.setItem("3pm", textAreaInput);
});

$(".saveBtn8").on("click", function () {
  var textAreaInput = $(".4pm").val();
  localStorage.setItem("4pm", textAreaInput);
});

$(".saveBtn9").on("click", function () {
  var textAreaInput = $(".5pm").val();
  localStorage.setItem("5pm", textAreaInput);
});

loadEvents();

//run auditTime every 5 minutes
setInterval(auditTime(), 1000 * 60 * 5);