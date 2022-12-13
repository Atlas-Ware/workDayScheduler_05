// Today's date variable
var today = moment().format('dddd, MMM Do YYYY');
// Print's today's date in the HTMLs id=today
$("#today").html(today);


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function timeOfDay() {
    
}

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist