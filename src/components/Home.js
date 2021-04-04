import React, { useContext } from 'react';
import MovieContext from '../context/MovieContext';
import Search from './Search';
import Pagination from './Pagination';
import MovieBox from './MovieBox';

const Home = () => {
    const { movieList, errorMsg } = useContext(MovieContext);
    return (
        <>
            <Search />
            {(movieList && movieList.length) ? (
                <>
                    <MovieBox />
                    <Pagination />
                </>
            ) : (
                <div className="mt-3 text-center">{errorMsg}</div>
            )}
        </>
    )
}

export default Home;
