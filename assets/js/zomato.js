
const zomatoKeys = new Cycle([
    "ee788b25e3c80fcb00d615303cde31c8"
    // TODO: Add other api keys
]);


const zomatoEndpoints = {
    search: "https://developers.zomato.com/api/v2.1/search"
}

var Zomato = {
    /**
     * 
     * **IMPORTANT**: Refer to https://developers.zomato.com/documentation - GET/search for list of valid query parameters
     * 
     * @return {Promise} Returns a promise fetching the data; Promise response is JSON
     */
    async search(queries) {
        let parameters = Object.entries(queries).reduce((acc, val) => {
            let [key, value] = val;
            return acc + `&${String(key)}=${String(value)}`;
        }, "").replace(/^&/, "?");
        let dataFetch = `${zomatoEndpoints.search}${parameters}`;
        console.log(dataFetch);
        return fetch(dataFetch, { headers: {"user-key": zomatoKeys.get()}}).then(response => response.json());
    }
}