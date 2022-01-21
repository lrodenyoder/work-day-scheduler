//variables
var todayDate = moment().format("dddd LL");
//current hour in 24hr format
var currentTime = moment().format("H");
//array to hold each hour of the scheduler
var textAreaArray = $(".description");

//display current date at the top of scheduler
$("#currentDay").replaceWith(todayDate);

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

//run auditTime every 5 minutes
setInterval(auditTime(), (1000 * 60) * 5);