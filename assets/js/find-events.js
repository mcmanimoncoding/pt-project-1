
$(_ => {
    // Get loaded data from local storage
    let data = window.localStorage.getItem("indexData");
    let loadedData = JSON.parse(data);

    // TODO: Update query to use lng lat & radius
    Ticketmaster.search({ postalCode: "85224" })
        .then(data => {
            let { _embedded: { events } } = data;
            events.forEach((rawEventData, index) => {
                // TODO: Add code for displaying events to the end-user and handling event selection here
                console.log(rawEventData);
                let ev = "#event"+(index+1);
                $( ev + " .uk-border-circle").attr("src", rawEventData.images["0"].url);
                $( ev + " #event-title").text(rawEventData.name);
                $( ev + " .event-time").text(rawEventData.dates.start.localTime);
                $( ev + " #event-details").html("<a target='_blank' href='" + rawEventData.url+"'>Details for "+rawEventData.name+"' </a>");

            });
        });
    
    /**
     * Caches the the selected object into local storage for later use.
     * Local storage entry is "savedEventData".
     *
     * 
     * 
     * 
     * *NOTE*: Object is saved to local storage as JSON, do not forget to call `JSON.parse()`
     * 
     * @param  {Object} savedEventData Object that will be saved to local storage
     */
    function saveEventData(savedEventData) {
        window.localStorage.setItem("savedEventData", JSON.stringify(savedEventData));
    }


    // TODO: Add "loading" animation to page before results are displayed

})
