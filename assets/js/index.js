
var newLocation;
var newDay;
var placesAutocomplete = places({
  appId: 'plUKJGJ6LEVW',
  apiKey: 'b28ccea8a5ebad3289976644f86bd0c4',
  container: document.querySelector('#location-input')
});

$("#search-button").on("click", function () {
    event.preventDefault()
    newLocation = $("#location-input").val().trim();
    newDay = $("#datepicker-3").val();
    console.log(newLocation + " : " + newDay);
});

$(function() {
    $( "#datepicker-3" ).datepicker({
       appendText:"(dd-mm-yy)",
       dateFormat:"dd-mm-yy",
       altField: "#datepicker-4",
       altFormat: "DD, d MM, yy"
    });
 });



