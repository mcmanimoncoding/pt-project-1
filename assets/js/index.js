
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

  let postalCode, lng, lat;

  placesAutocomplete.on("change", event => {
    postalCode = event.suggestion.postcode; // FIXME: Certain postcodes are empty
    lng = event.suggestion.latlng.lng;
    lat = event.suggestion.latlng.lat;
    console.log(event.suggestion);
    $(".ap-input-icon").css({ display: 'none' });
  });
  
  placesAutocomplete.on("clear", event => {
    postalCode = undefined; lng = undefined; lat = undefined;
    $(".ap-input-icon").css({ display: 'none' });
  })

  $(".ap-input-icon").addClass("d-none");

  $("#search-button").on("click", function () {
    event.preventDefault();
    let locationName = $("#location-input").val();
    let date = $("#datepicker").val();
    if (postalCode && locationName && lat && lng && date) {
      let transferData = { locationName, postalCode, lng, lat, date };
      window.localStorage.setItem("indexData", JSON.stringify(transferData));
      window.open("./find-events.html", "_self");
    } else {
      // TODO: Display error for incorrectly chosen location.
      if (!postalCode || !lng || !lat || !locationName) {
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