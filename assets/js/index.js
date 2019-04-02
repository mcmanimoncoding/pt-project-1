
var newLocation;
var newDay;

console.log("active")

$("#search-button").on("click", function () {
    event.preventDefault();
    newLocation = $("#location-input").val().trim();
    newDay = $("#day-input").val();
    console.log(newLocation + " : " + newDay);
    console.log(placesAutocomplete);
});


var placesAutocomplete = places({
  appId: 'plUKJGJ6LEVW',
  apiKey: 'b28ccea8a5ebad3289976644f86bd0c4',
  container: document.querySelector('#location-input')
});
