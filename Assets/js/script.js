// Today's date variable
var today = moment().format('dddd, MMM Do YYYY');
// Print's today's date in the HTMLs id=today
$("#today").html(today);


$(document).ready(function () {
// This 1st part of the function saves any data typed in each time block
    $("button").on("click", function () {
// This varaibale saves the text that is typed in
        var text = $(this).siblings("textarea").val();
// This varaibale saves my ID of the specific time where the text was written
        var time = $(this).parent().attr("id");
// This takes var text and time and stores it in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
// this varaible represents the current hour of the day
        var timeNow = moment().hour();

// Time blocks loops
        $(".time").each(function () {
// This varaiable is the specific time blocks that were made in the HTML
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            //console.log(blockTime);

// These arguments keep each time block to show the right color based on time of day
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

// Returns info that was typed into local storage and keeps it, even if browser is refreshed
    $("#hour09 textarea").val(localStorage.getItem("hour09"));
    $("#hour10 textarea").val(localStorage.getItem("hour10"));
    $("#hour11 textarea").val(localStorage.getItem("hour11"));
    $("#hour12 textarea").val(localStorage.getItem("hour12"));
    $("#hour13 textarea").val(localStorage.getItem("hour13"));
    $("#hour14 textarea").val(localStorage.getItem("hour14"));
    $("#hour15 textarea").val(localStorage.getItem("hour15"));
    $("#hour16 textarea").val(localStorage.getItem("hour16"));
    $("#hour17 textarea").val(localStorage.getItem("hour17"));

    timeTracker();
})