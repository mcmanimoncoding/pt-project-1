// Get loaded data from local storage
let data = window.localStorage.getItem("indexData");
if (!data) window.open("./", "_self");
let loadedData = JSON.parse(data);

$(_ => {
    Ticketmaster.search({ countryCode: loadedData.countryCode, city: loadedData.city })
        .then(data => {
            console.log(data);
            if (data.page.totalElements < 10) {
                // TODO: Display page saying results could not be found in this location
                throw new RangeError("There was not enough element pulled to display to the page!");
            }
            let {
                _embedded: {
                    events
                }
            } = data;
            events.forEach((rawEventData, index) => {
                // TODO: Add code for displaying events to the end-user and handling event selection here
                let ev = "#event" + (index + 1);
                $(ev + " .uk-card-media").attr("src", rawEventData.images["0"].url);
                $(ev + " #event-title").text(rawEventData.name);
                $(ev + " .event-time").text(rawEventData.dates.start.localTime);
                $(ev + " #event-details").html("<a target='_blank' href='" + rawEventData.url + "'>Details for " + rawEventData.name + "' </a>");

                $(ev + " button").on("click", function (event) {
                    event.preventDefault();
                    var savedEventData = {
                        event: {
                            name: rawEventData.name,
                            time: rawEventData.dates.start.localTime,
                            eventDetails: rawEventData.url,
                            eventImg: rawEventData.images["0"].url,
                            eventLoc: rawEventData._embedded.venues["0"].location,
                        }
                    }
                    saveEventData(savedEventData);
                    window.open("./find-restaurants.html", "_self");
                });
            });
        })
        .catch(err => {
            console.log("Ticketmaster error: " + err);
            // TODO: Display error page to user
        })
        .finally(_ => {
            $("#find-events-main-content").removeClass("d-none");
            $("#find-events-loading-display").remove();
        })

    /**
     * Caches the the selected object into local storage for later use.
     * Local storage entry is "savedEventData".
     * *NOTE*: Object is saved to local storage as JSON, do not forget to call `JSON.parse()` when calling getItem
     * @param  {Object} savedEventData Object that will be saved to local storage
     */
    function saveEventData(savedEventData) {
        window.localStorage.setItem("savedEventData", JSON.stringify(savedEventData));
        // console.log(savedEventData);
    }

    // TODO: Add "loading" animation to page before results are displayed
});
