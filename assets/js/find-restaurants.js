
// TODO: Get user-inputted locally-stored location info

Zomato.search({q:"seafood"})
    .then(response => {
        let {restaurants, results_found: resultCount} = response;
        restaurants.forEach(rawRestaurantEvent => {
            // TODO: Add code for displaying restaurants to the end-user and handling restaurant selection here
        });
    })
    .catch(err => {
        console.log("There was an error:", err);
    });

// TODO: Add "loading" animation to page before results are displayed
