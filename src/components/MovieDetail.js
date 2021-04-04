import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MovieContext from '../context/MovieContext';

const MovieDetail = ({ match }) => {

    const { movieDetail, getMovieDetail } = useContext(MovieContext);

    useEffect(() => {
        getMovieDetail(match.params.imdbID);
    }, []);

    return (
        <>
            <Link to="/">
                Back to results
            </Link>
            <div className="card">
                <div className="row">
                    <img className="col-3 card-img-top" src={movieDetail.Poster !== 'N/A' ? movieDetail.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} alt={movieDetail.Title} />
                    <div className="col-9 card-body">
                        <h5 className="card-title">{movieDetail.Title}</h5>
                        <p className="card-text">{movieDetail.Year}</p>
                        <div className="card bg-light mr-3">
                            <div className="card-body">
                                <p className="card-text">{movieDetail.Plot}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail;