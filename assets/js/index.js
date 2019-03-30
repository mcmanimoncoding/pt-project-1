

var newLocation;
var newDay;

console.log("active")

$("#search-button").on("click", function () {
    event.preventDefault();
    newLocation = $("#location-input").val().trim();
    newDay = $("#day-input").val();
    console.log(newLocation + " : " + newDay);
});


