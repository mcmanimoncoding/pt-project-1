
// Get loaded data from previous pages
let indexData = JSON.parse(window.localStorage.getItem("indexData"));
let savedRestaurantData = JSON.parse(window.localStorage.getItem("savedRestaurantData"));
let savedEventData = JSON.parse(window.localStorage.getItem("savedEventData"));
// if (!indexData || !savedRestaurantData || !savedEventData) window.open("./", "_self");

// Called when the document loads
$(_ => {
    if (savedEventData.event) {
        let { event } = savedEventData;
        $("#event-card .card-title").text(event.name);
        $("#event-card .card-text").text(event.time);
        $("#event-card .card-img-top").attr("src", event.eventImg);
        $("#event-card a").attr("href", event.eventDetails);
        $("#event-card a").attr("target", "_blank");
    }
    if (true) {
        // let someVar;
        $("#rest-card .card-title").text("Name");
        $("#rest-card .card-text").text("Desc");
        // $("#rest-card .card-img-top").attr("src", url);
        // $("#rest-card a").attr("href", link);
        $("#rest-card a").attr("target", "_blank");
    }
    $("#itinerary-main-content").removeClass("d-none");
    $("#itinerary-loading-display").remove();
});