
const zomatoKeys = new Cycle([
    "ee788b25e3c80fcb00d615303cde31c8",
    "df29cbd9276beed080cd6b167e95c73a",
    "6f9a04e4df423defb036e6beb35060d4"
    // TODO: Add other api keys
]);


const zomatoEndpoints = {
    search: "https://developers.zomato.com/api/v2.1/search",
    geocode: "https://developers.zomato.com/api/v2.1/geocode"
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
        return fetch(dataFetch, { headers: {"user-key": zomatoKeys.get()}}).then(response => response.json());
    }
}