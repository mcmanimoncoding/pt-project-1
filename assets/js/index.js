// var userInput = 
// { userLocation: newLocation , 
//     chosenDay: newDay};

var newLocation;
var newDay;

$("#search-button").on("click", function () {
    event.preventDefault()
    newLocation = $("#location-input").val().trim();
    newDay = $("#day-input").val();
    console.log(newLocation + " : " + newDay);
});

