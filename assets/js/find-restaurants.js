
// Get loaded data from local storage
let data = window.localStorage.getItem("indexData");
if (!data) window.open("./", "_self");
let loadedData = JSON.parse(data);

$(_ => {
    console.log("Zomato");
    Zomato.search({ lng: loadedData.lng, lat: loadedData.lat })
        .then(response => {
            let { restaurants, results_found: resultCount } = response;
            console.log(response);
            restaurants.forEach(rawRestaurantEvent => {
                console.log(rawRestaurantEvent);
                // TODO: Add code for displaying restaurants to the end-user and handling restaurant selection here
            });
        })
        .catch(err => {
            console.log("There was an error:", err);
        })
        .catch(err => {
            console.log("Zomato error: " + err);
            // TODO: Display error page to user
        });
    
    /**
     * Caches the the given object into local storage for later use.
     * Local storage entry is "savedRestaurantData".
     * 
     * *NOTE*: Object is saved to local storage as JSON, do not forget to call `JSON.parse()`
     * 
     * @param  {Object} savedEventData Object that will be saved to local storage
     */
    function saveRestaurantData(savedRestaurantData) {
        window.localStorage.setItem("savedRestaurantData", JSON.stringify(savedRestaurantData));
    }

    // TODO: Add "loading" animation to page before results are displayed

});
