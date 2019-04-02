
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
  let datePicked = $("#day-input").val();
  let locationName = $("#location-input").val();
  if (lat && lng) {
    let transferData = {locationName, datePicked, lat, lng};
    window.localStorage.setItem("indexData", JSON.stringify(transferData));
    window.open("./find-events.html", "_self");
  } else {
    // TODO: Display error for incorrectly chosen location.
  }
});
