const BAND_API_KEY = "e7cf59d7-f9e9-41e2-966e-9ca08ff7b8ad"

class BandSiteApi {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async postComment(comment){
        const bandApiResponse = await axios.post(`${this.baseUrl}comments?api_key=${this.apiKey}`, comment);
        return bandApiResponse.data;
    }

    async getComments(){
        const bandApiResponse = await axios.get(`${this.baseUrl}comments?api_key=${this.apiKey}`);
        const sortedBandApiResponse = bandApiResponse.data.sort(function(a,b){return b.timestamp - a.timestamp});
        //displayComment(sortedbandApiResponse);
        return sortedBandApiResponse;
    }

    async getShows(){
        const bandApiResponse = await axios.get(`${this.baseUrl}showdates?api_key=${this.apiKey}`);
        return bandApiResponse.data;
    }

    async likeComment(id){
        const bandApiResponse = await axios.put(`${this.baseUrl}comments/${id}/like?api_key=${this.apiKey}`);
        return bandApiResponse.data;
    }
    async deleteComment(id){
        const bandApiResponse = await axios.delete(`${this.baseUrl}comments/${id}?api_key=${this.apiKey}`);
        return bandApiResponse.data;
    }
}

export default BandSiteApi;
export {BAND_API_KEY}; 
