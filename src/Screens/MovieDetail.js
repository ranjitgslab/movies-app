import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class MovieDetail extends Component {
    render() {
        const { id, title, overview, poster_path, vote_average, 
            release_date, vote_count, backdrop_path } = this.props.location.state.movie;

        return (
            <div className="container-fluid">
                <img className="detailImage" 
                    src={backdrop_path} 
                />
                <div>
                    <label>Movie Name -: </label>
                    <span>{title}</span>
                </div>
                <div>
                    <label>Producer Name -: </label>
                    <span>{} </span>
                </div>
                <div>
                    <label>Description -: </label>
                    <span>{overview}  </span>
                </div>
            </div>
        );
    }
}
 
export default withRouter(MovieDetail);