const BAND_API_KEY = "e7cf59d7-f9e9-41e2-966e-9ca08ff7b8ad"

class BandSiteApi {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async postComment(comment){
        const bandApiResponse = await axios.post(`${this.baseUrl}comments?api_key=${ this.apiKey}`, comment);
        return bandApiResponse.data;
    }

    async getComments(){
        const bandApiResponse = await axios.get(`${this.baseUrl}comments?api_key=${this.apiKey}`);
        bandApiResponse.data.sort(function(a,b){return a.timestamp - b.timestamp});
        return bandApiResponse.data;
    }

    async getShows(){
        const bandApiResponse = await axios.get(`${this.baseUrl}showdates?api_key=${ this.apiKey}`);
        return bandApiResponse.data;
    }
}

const bandApi = new BandSiteApi(BAND_API_KEY);

const getBandComment = async () => {
    try {
        const comments = await bandApi.getComments();
        return comments;
    } catch (error) {
        console.log("Couldn't fetch the band data", error);
    }
}

const postBandComment = async (comment) => {
    try {
        const comments = await bandApi.postComment(comment);
        return comments;
    } catch (error) {
        console.log("Couldn't fetch the band data", error);
    }
}

const getBandShowdates = async (comment) => {
    try {
        const showDates = await bandApi.getShows();
        return showDates;
    } catch (error) {
        console.log("Couldn't fetch the band data", error);
    }
}

// console.log(getBandComment());
// console.log(postBandComment({name:"nigel",comment:"You are the best"}));
// console.log(getBandShowdates());
//export default BAND_API_KEY;
//export {BandSiteApi,bandApi};
