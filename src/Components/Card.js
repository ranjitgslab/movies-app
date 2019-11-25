import React from 'react';
import {Link} from "react-router-dom";

function Card({ movie, favoriteMovie }) {
    const { id, title, overview, poster_path, vote_average, 
            release_date, vote_count } = movie;
    return (
        <div className="card">
            <img className="cardImgTop" src={poster_path} onClick={() => favoriteMovie(movie) } />
            <div className="cardBody">
                <h4 className="cardTitle">
                    <Link to={{
                        pathname: `/movies/${id}`,
                        state: { movie }
                    }}>
                        {title}
                    </Link>
                </h4>
                <p className="cardText">{overview}</p>
                <div className="rating">
                    <span>{vote_average}/10 </span>
                    <span> ({vote_count}) votes</span>
                </div>
                <div className="date">
                    <label>Release Date -: </label>
                    <span>{release_date}</span>
                </div>
            </div>
        </div>
    );
}
 
export default Card;