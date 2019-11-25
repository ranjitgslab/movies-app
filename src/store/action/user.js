import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const APIKey = "a69d1fb949ca3bfa83d4ced75d988fa7";

const requestSuccess = (type, value) => {
    return { type, value};
}

const requestError = (type, error) => {
    return { type, error}; 
}

export const getUser = () => (dispatch) => {
    axios.get(`${baseURL}account&api_key=${APIKey}`)
    .then((res) => {
        dispatch(requestSuccess('GET_USER', res.data.results));
    }).catch((error) => {
        dispatch(requestError("ERROR", error));
        console.log(error, "Error");
    });
}

