
// TODO: Get user-inputted locally-stored location info

// Using postal code as a placeholder for now
Ticketmaster.search({ postalCode: "85224" })
    .then(data => {
        let { _embedded: { events } } = data;
        events.forEach(rawEventData => {
            // TODO: Add code for displaying events to the end-user and handling event selection here
            $("#main-container").append()
        });
    });

// TODO: Add "loading" animation to page before results are displayed

console.log(rawEventData);

function resultsPop(){

}

// resultsPop();