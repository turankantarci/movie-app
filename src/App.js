import React, { useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import MovieContext from './context/MovieContext';
import MovieReducer from './reducers/MovieReducer';
import axios from 'axios';

const App = () => {

  const initialState = {
    movieList: [],
    movieDetail: {},
    pages: 0,
    keyword: "",
    errorMsg: ""
  }

  const [ state, dispatch ] = useReducer(MovieReducer, initialState);
  const apiKey = process.env.REACT_APP_API_KEY;

  const getMovies = (page = 1) => {
    dispatch({
      type: 'SET_MOVIE_LIST', 
      payload: []
    });
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${state.keyword}&page=${page}`)
      .then((response) => {
        if (response.data.Response === "True") {
          dispatch({
            type: 'SET_MOVIE_LIST', 
            payload: response.data.Search
          });
          dispatch({
            type:'SET_PAGES',
            payload: Math.ceil(response.data.totalResults / 10)
          });
        } else {
          dispatch({
            type: 'SET_ERROR_MESSAGE',
            payload: response.data.Error
          });
        }
      });
  }

  const getMovieDetail = (id) => {
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
      .then((response) => {
        dispatch({
          type:'SET_MOVIE_DETAIL',
          payload: response.data
        });
      });
  }

  return (
    <MovieContext.Provider value={
      {
        movieList: state.movieList,
        pages: state.pages,
        movieDetail: state.movieDetail,
        keyword: state.keyword,
        errorMsg: state.errorMsg,
        getMovies,
        getMovieDetail,
        dispatch
      }
    }>
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/moviedetail/:imdbID" component={MovieDetail}>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </MovieContext.Provider>
  )
}

export default App;
