import axios from "axios";

const API_KEY = "538b5f67";

const API_LINK = "http://www.omdbapi.com/?apikey=" + API_KEY + "&";

export const fetchMovie = title => {
    //call service
    const movieList = axios.get(API_LINK + 't=' + title);
    console.log(movieList);   
    return movieList;
}

