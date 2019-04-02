
$(_ => {
    // Get loaded data from local storage
    let data = window.localStorage.getItem("indexData");
    let loadedData = JSON.parse(data);

    // Using postal code as a placeholder for now
    Ticketmaster.search({ postalCode: "85224" })
        .then(data => {
            let { _embedded: { events } } = data;
            events.forEach(rawEventData => {
                // TODO: Add code for displaying events to the end-user and handling event selection here
            });
        });
    
    /**
     * Caches the the given object into local storage for later use.
     * 
     * @param  {type} savedEventData Object that will be saved to local storage
     */
    function saveEventData(savedEventData) {
        window.localStorage.setItem("savedEventData", JSON.stringify(savedEventData));
    }


    // TODO: Add "loading" animation to page before results are displayed

})
