

var newLocation;

$("#search-button").on("click", function() {
    event.preventDefault()
    newLocation = $("#location-input").val().trim();
    console.log(newLocation);
});




