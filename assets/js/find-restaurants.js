// Get loaded data from local storage
let data = window.localStorage.getItem("indexData");
if (!data) window.open("./", "_self");
let loadedData = JSON.parse(data);

$(_ => {
    console.log("Zomato");
    Zomato.search({
            lon: loadedData.lng,
            lat: loadedData.lat
        })
        .then(response => {
            console.log(response);
            let {
                restaurants,
                results_found: resultCount
            } = response;
            console.log(response);
            restaurants.forEach((rawRestaurantData, index) => {
                console.log(rawRestaurantData);
                // TODO: Add code for displaying restaurants to the end-user and handling restaurant selection here
                let res = "#rest" + (index + 1);

                console.log(rawRestaurantData.restaurant.photos_url);

                if (rawRestaurantData.restaurant.featured_image !== ""){

                    $(res + " .uk-card-media").attr("src", rawRestaurantData.restaurant.featured_image);
                }else{
                    
                };

                $(res + " #rest-title").text(rawRestaurantData.restaurant.name);

                $(res + " .rest-address").text(rawRestaurantData.restaurant.location.address);

                $(res + " #rest-details").text("Rating: " + rawRestaurantData.restaurant.user_rating.aggregate_rating + " out of 5").append("<br>Cuisine: " + rawRestaurantData.restaurant.cuisines).append("<br><br><a href='" + rawRestaurantData.restaurant.menu_url + "'><h3>Check Out The Menu!</h3></a>");



                $(res + " button").on("click", function (event) {
                    console.log("click")
                    event.preventDefault();
                    var savedRestData = {
                        restaurant: {
                            restName: rawRestaurantData.restaurant.name,
                            restAddress: rawRestaurantData.restaurant.location.address,
                            restImg: rawRestaurantData.restaurant.featured_image,
                            restCuisine: rawRestaurantData.restaurant.cuisines,
                        }
                    }
                    saveRestData(savedRestData);
                    window.open("./itinerary.html", "_self");
                });
            });
        })
        .catch(err => {
            console.log("There was an error:", err);
        })
        .catch(err => {
            console.log("Zomato error: " + err);
            // TODO: Display error page to user
        })
        .finally(_ => {
            $("#find-restaurants-main-content").removeClass("d-none");
            $("#find-restaurants-loading-display").remove();
        });



    /**
     * Caches the the given object into local storage for later use.
     * Local storage entry is "savedRestaurantData".
     * 
     * *NOTE*: Object is saved to local storage as JSON, do not forget to call `JSON.parse()`
     * 
     * @param  {Object} savedRestData Object that will be saved to local storage
     */
    function saveRestData(savedRestData) {
        window.localStorage.setItem("savedRestaurantData", JSON.stringify(savedRestData));
    }

    // TODO: Add "loading" animation to page before results are displayed

});