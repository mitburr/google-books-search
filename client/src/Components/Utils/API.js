import axios from "axios";

export default {

    //call to googlebooks api for a searched for book
    //book title passed in URL
    getBook : function (id) {
        return axios.get("/api/search/" + id)
    },
    //fills saved page with all saved books from db
    getBooks : function(){
        return axios.get("/api/searchdb");
    },
    //save book to db
    saveBook : function(id){
        return axios.post("/api/save/", id)
    }
}