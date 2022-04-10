// variable declarations

var storage = window.localStorage;
var container = $(".container");
var now = moment();
var currentDayEl = $("#currentDay");
var currentTime = { text: moment().format("h:00 A"), hour: moment().hour() };

// showing timestamp on header section 
currentDayEl.text(now.format("ddd MMMM DD, YYYY"));

// 
