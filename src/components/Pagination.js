import React, { useContext } from 'react';
import MovieContext from '../context/MovieContext';

const Pagination = () => {

    const { pages, getMovies } = useContext(MovieContext);

    let pageList = [];

    for (let i = 1; i <= pages; i++) {
        pageList.push(<li className="page-item" key={i}><a className="page-link" href="#" onClick={() => { getMovies(i) }}>{i}</a></li>);
    }

    return (
        <nav>
            <ul className="pagination flex-wrap pagination-lg">
                {pageList}
            </ul>
        </nav>
    )
}

export default Pagination;
