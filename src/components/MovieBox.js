import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MovieContext from '../context/MovieContext';

const MovieBox = () => {

    const { movieList } = useContext(MovieContext);

    return (
        <div className="row">
            {movieList.map((movie, key) => {
                return (
                    <Link to={`/moviedetail/${movie.imdbID}`} className="col-12 mb-3" key={key}>
                        <div className="card">
                            <div className="row">
                                <img className="col-3 card-img-top" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} alt={movie.Title} />
                                <div className="col-9 card-body">
                                    <h5 className="card-title">{movie.Title}</h5>
                                    <p className="card-text">{movie.Year}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default MovieBox;
