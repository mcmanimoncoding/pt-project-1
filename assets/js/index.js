
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

  let lat, lng;
  placesAutocomplete.on("change", event => {
    lat = event.suggestion.latlng.lat;
    lng = event.suggestion.latlng.lng;
    $(".ap-input-icon").css({ display: 'none' });
  });
  
  placesAutocomplete.on("clear", event => {
    lat = undefined; lng = undefined;
    $(".ap-input-icon").css({ display: 'none' });
  })

  $(".ap-input-icon").addClass("d-none");

  $("#search-button").on("click", function () {
    event.preventDefault();
    let locationName = $("#location-input").val();
    let date = $("#datepicker").val();
    if (lat && lng && locationName && date) {
      let transferData = { locationName, lat, lng, date };
      window.localStorage.setItem("indexData", JSON.stringify(transferData));
      window.open("./find-events.html", "_self");
    } else {
      // TODO: Display error for incorrectly chosen location.
      if (!lng || !lat || !locationName) {
        $("#location-input").addClass('error-highlight');
        animate(".algolia-places > button", "shake");
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