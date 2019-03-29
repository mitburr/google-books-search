import axios from "axios";

export default {

    //call to googlebooks api for a searched for book
    //book title passed in URL
    getBook : function (id) {
        //returns the promise of the axios call, !!_must call .then on whatever makes the call_!!
     return axios.get("http://localhost:3001/api/search/" + id )
    },
    //fills saved page with all saved books from db
    getBooks : function(){
        return axios.get("http://localhost:3001/api/searchdb");
    },
    //save book to db
    saveBook : function(id){
        return axios.post("http://localhost:3001/api/save/", id)
    }
}
