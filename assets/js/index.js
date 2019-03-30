
// var datepicker = UIkit.datepicker(element, { /* options */ });
// $('.datepicker').datepicker();
// $('.datepicker').datepicker({
//     format: 'mm/dd/yyyy',
//     startDate: '-3d'
// });


var newLocation;
var newDay;

$("#search-button").on("click", function () {
    event.preventDefault()
    newLocation = $("#location-input").val().trim();
    newDay = $("#day-input").val();
    console.log(newLocation + " : " + newDay);
});


