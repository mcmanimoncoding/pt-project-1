<<<<<<< HEAD
// var datepicker = UIkit.datepicker(element, { /* options */ });
$('.datepicker').datepicker();
$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
});
=======


var newLocation;

$("#search-button").on("click", function() {
    event.preventDefault()
    newLocation = $("#location-input").val().trim();
    console.log(newLocation);
});




>>>>>>> a26043356b2a4cd7600f8b8534373e7964a257e8
