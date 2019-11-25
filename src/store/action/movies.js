import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const APIKey = "a69d1fb949ca3bfa83d4ced75d988fa7";

const requestSuccess = (type, value) => {
    return { type, value};
}

const requestError = (error) => {
    return {error};
}

export const getMovies = (sortBy) => (dispatch) => {
    
    if(!sortBy) {
        sortBy = "revenue.desc";
    }

    axios.get(`${baseURL}discover/movie?include_adult=false&sort_by=${sortBy}&api_key=${APIKey}`)
    .then((res) => {
        dispatch(requestSuccess('GET_MOVIES', res.data.results));
    }).catch((error) => {
        dispatch(requestError(error));
        console.log(error, "Error");
    });
}

export const searchMovies = (query) => (dispatch) => {
    axios.get(`${baseURL}search/movie?include_adult=false&page=1&query=${query}&api_key=${APIKey}`)
    .then((res) => {
        dispatch(requestSuccess('GET_MOVIES', res.data.results));
    }).catch((error) => {
        dispatch(requestError(error));
        console.log(error, "Error");
    });
}

export const favoriteMovie = (value) => (dispatch) => {
    dispatch(requestSuccess('ADD_REMOVE_FAVORITE_MOVIES', value))
}
