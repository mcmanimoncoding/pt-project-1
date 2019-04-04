
var newLocation;
var newDay;


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


$(function() {
  var placesAutocomplete = places({
    appId: 'plUKJGJ6LEVW',
    apiKey: 'b28ccea8a5ebad3289976644f86bd0c4',
    container: document.querySelector('#location-input')
  });

  let lat, lng;

  placesAutocomplete.on("change", event => {
    lat = event.suggestion.latlng.lat;
    lng = event.suggestion.latlng.lng;
    console.log(lat, lng);
  });

  placesAutocomplete.on("clear", event => {
    lat = undefined; lng = undefined;
  })

  $("#search-button").on("click", function () {
    event.preventDefault();
    let locationName = $("#location-input").val();
    let date = $("#datepicker-3").val();
    if (lat && lng && locationName && date) {
      let transferData = {locationName, lat, lng, date};
      window.localStorage.setItem("indexData", JSON.stringify(transferData));
      window.open("./find-events.html", "_self");
    } else {
      // TODO: Display error for incorrectly chosen location.
    }
  });
});