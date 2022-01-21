var todayDate = moment().format("dddd LL");
console.log(todayDate);

$("#currentDay").replaceWith(todayDate);