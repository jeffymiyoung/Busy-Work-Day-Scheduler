// variable declarations
var currentDayEl = $("#currentDay");
var currentTime = { text: moment().format("h:00 A"), hour: moment().hour() };

// showing timestamp on header section 
currentDayEl.text(moment().format("ddd MMMM DD, YYYY"));

// time check validation
function timeKeeper () {
    // current number of hours
    var timeNow = moment().hour();

    // loop over time slots
    $(".time-block").each(function () {
        // parseInt of the time slot user selects
        var slotTime = parseInt($(this).attr("id").split("hour")[1]);

        if (slotTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (slotTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });
};


$(document).ready(function () {

    // click event listener
    $(".saveBtn").on("click", function () {

        // get text and time values
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save values to localStorage
        localStorage.setItem(time, text);
    })

    // get localStorage data for each hour specification
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


    timeKeeper();
});