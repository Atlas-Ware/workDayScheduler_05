// Today's date, time & day
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);


$(document).ready(function () {
// This 1st part of the function saves any data typed in each time block
    $(".saveBtn").on("click", function () {
// This varaibale saves the text that is type in
        var text = $(this).siblings(".description").val();
// This varaibale saves my ID of the specific time where the text was written
        var time = $(this).parent().attr("id");
// This takes var text and time and stores it in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
// this varaible represents the current hour of the day
        var timeNow = moment().hour();

// Time blocks loops
        $(".time-block").each(function () {
// This varaiable are the specific time blocks that were made in the HTML
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
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})