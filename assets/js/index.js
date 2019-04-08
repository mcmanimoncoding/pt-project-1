
var newLocation;
var newDay;

$("#search-button").on("click", function () {
  event.preventDefault()
  newLocation = $("#location-input").val().trim();
  newDay = $("#datepicker").val();
});

// Code stub from https://github.com/daneden/animate.css
function animate(element, animationName, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName)
  function handleAnimationEnd() {
    node.classList.remove('animated', animationName)
    node.removeEventListener('animationend', handleAnimationEnd)
    if (typeof callback === 'function') callback()
  }
  node.addEventListener('animationend', handleAnimationEnd)
}

$(function () {
  // Initialize the datepicker
  $("#datepicker").datepicker({
    appendText: "",
    dateFormat: "dd-mm-yy",
    altField: "#datepicker-4",
    altFormat: "DD, d MM, yy"
  });

  // Initialize and handle Algolia/places api autocomplete
  var placesAutocomplete = places({
    appId: 'plUKJGJ6LEVW',
    apiKey: 'b28ccea8a5ebad3289976644f86bd0c4',
    container: document.querySelector('#location-input')
  });

  let lng, lat, city, state, countryCode;

  placesAutocomplete.on("change", event => {
    lng = event.suggestion.latlng.lng;
    lat = event.suggestion.latlng.lat;
    countryCode = event.suggestion.countryCode;
    city = event.suggestion.name;
    state = event.suggestion.highlight.administrative;
    console.log(lat, lng, city, countryCode, state);
    $(".ap-input-icon").css({ display: 'none' });
  });
  
  placesAutocomplete.on("clear", event => {
    lng = undefined; lat = undefined;
    countryCode = undefined; city = undefined; state = undefined;
    $(".ap-input-icon").css({ display: 'none' });
  })

  $(".ap-input-icon").addClass("d-none");

  $("#search-button").on("click", function () {
    event.preventDefault();
    let locationName = $("#location-input").val();
    let date = $("#datepicker").val();
    if (locationName && lat && lng && city && countryCode && state && date) {
      let transferData = { locationName, lng, lat, date, city, state, countryCode };
      window.localStorage.setItem("indexData", JSON.stringify(transferData));
      window.open("./find-events.html", "_self");
    } else {
      // TODO: Display error for incorrectly chosen location.
      if (!city || !countryCode || !state || !lng || !lat || !locationName) {
        $("#location-input").addClass('error-highlight');
        animate("#location-input", "shake", _ => {
          $("#location-input").removeClass('error-highlight');
        });
      } else if (!date) {
        $("#datepicker").addClass('error-highlight');
        animate("#datepicker", "shake", _ => {
          $("#datepicker").removeClass('error-highlight');
        });
      } else {
        console.log("There was an error");
      }
    }
  });
});