import React, { Component } from 'react';
import Card from "../Components/Card";
import axios from 'axios';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import * as moviesAction from "../store/action/movies";
 
class MoviesList extends Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() { 
        const { movies, favoriteMovie, favoriteMoviesList, location:{pathname} } = this.props;
        let moviesList = movies;

        if(pathname === "/favourite") {
            moviesList = favoriteMoviesList;
        }

        let validCard = null;
        if(moviesList.length) {
            validCard = moviesList.map((movie) => 
            <Card key={movie.id} 
                movie={movie} 
                favoriteMovie={favoriteMovie} 
            />)
        }

        return (
            <div className="container">
               {validCard}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies.moviesList,
    favoriteMoviesList: state.movies.favoriteMoviesList,
});

const mapDispatchToProps = (dispatch) => ({
    getMovies: (slug) => dispatch(moviesAction.getMovies(slug)),
    favoriteMovie: (value) => dispatch(moviesAction.favoriteMovie(value)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesList));