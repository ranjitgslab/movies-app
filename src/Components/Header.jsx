import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import * as moviesAction from "../store/action/movies";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectFilter: ''
        }

        this.timeOutArray = [];
    }
    
    handleChange = (event) => {
        this.timeOutArray.map((element) => {
            clearTimeout(element);
        });

        let query = event.target.value;
        this.timeOutArray.push(setTimeout(() => {
            if(query) {
                this.props.searchMovies(query);
            } else {
                this.props.getMovies();
            }
        }, 2000));
    }

    handleMovieSelect = (e) => {
        this.setState({selectFilter : e.target.value});
        this.props.getMovies(e.target.value);
    }

    render() {
        const { selectFilter } = this.state;
        return (
            <div className="header">
                <Link className="active" to="">All</Link>
                <Link    to="/favourite">Favorite</Link>
                <input onChange={(e) => this.handleChange(e)} size="50" />
                <select onChange={(e) => this.handleMovieSelect(e)} value={selectFilter} >
                    <option value="">Select</option>
                    <option value="popularity.desc">Popular</option>
                    <option value="release_date.desc">Release Date</option>
                    <option value="revenue.desc">Revenue</option>
                    {/* <option value="revenue.desc">Upcoming</option> */}
                    <option value="vote_average.desc">Top Rated</option>
                </select>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchMovies: (query) => dispatch(moviesAction.searchMovies(query)),
    getMovies: (slug) => dispatch(moviesAction.getMovies(slug))
});

export default connect(null, mapDispatchToProps)(Header);
