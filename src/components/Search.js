import React, { useContext } from 'react';
import MovieContext from '../context/MovieContext';

const Search = () => {

    const { getMovies, dispatch } = useContext(MovieContext);

    return (
        <div className="input-group input-group-lg my-3">
            <input type="text" className="form-control" placeholder="Movie name..." onChange={(e) => dispatch({type: 'SET_KEYWORD', payload: e.target.value})} onKeyUp={(e) => { (e.key === "Enter" && e.target.value) && getMovies() }} />
            <div className="input-group-append">
                <button className="btn btn-dark" type="button" onClick={() => { getMovies() }}>Search</button>
            </div>
        </div>
    )
}

export default Search;
