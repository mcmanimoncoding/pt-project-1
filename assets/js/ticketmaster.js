
const ticketmasterKeys = new Cycle([
    "Mqkjj84qAfT4AywKP23F1r95SfMxrwx9"
    // TODO: Add other api keys
]);


const ticketmasterEnpoints = {
    search: "https://app.ticketmaster.com/discovery/v2/events.json"
}

var Ticketmaster = {
    /**
     * 
     * **IMPORTANT**: Refer to https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#anchor_find for list of valid query keys
     * 
     * @return {Promise} Returns a promise fetching the data; Promise response is JSON
     */
    async search(queries) {
        let parameters = Object.entries(queries).reduce((acc, val) => {
            let [key, value] = val;
            return acc + `&${String(key)}=${String(value)}`;
        }, "");
        let dataFetch = `${ticketmasterEnpoints.search}?apikey=${ticketmasterKeys.get()}${parameters}`;
        console.log(dataFetch);
        return fetch(dataFetch).then(response => response.json());
    }
}