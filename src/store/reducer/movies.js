const initValue = {
    moviesList: [],
    favoriteMoviesList: []
}

const reducer = (state = initValue, {type, value}) => {
    switch (type) {
        case 'GET_MOVIES':
            let imageUrl = "https://via.placeholder.com/150";
            return {
                ...state,
                moviesList: value.map((movie) => {                   
                    if(!movie.poster_path) {
                        movie.poster_path = imageUrl;
                    } else {
                        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    }

                    if(!movie.backdrop_path) {
                        movie.backdrop_path = imageUrl;
                    } else {
                        movie.backdrop_path = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                    }

                    return movie;
                })
            };
        case 'ADD_REMOVE_FAVORITE_MOVIES':
            debugger;
            return {
                ...state,
                favoriteMoviesList: state.favoriteMoviesList.concat(value)
            }
        default:
            return {...state};
    }
}

export default reducer;