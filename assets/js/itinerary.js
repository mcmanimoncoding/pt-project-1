
// Called when the document loads
$(_ => {
    // Get loaded data from previous pages
    let indexData = JSON.parse(window.localStorage.getItem("indexData"));
    let savedRestaurantData = JSON.parse(window.localStorage.getItem("savedRestaurantData"));
    let savedEventData = JSON.parse(window.localStorage.getItem("savedEventData"));
});