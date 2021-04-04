const MovieReducer = (state, action) => {
    switch (action.type) {
        case "SET_MOVIE_LIST":
            return {
                ...state,
                movieList: action.payload
            }
        case "SET_MOVIE_DETAIL":
            return {
                ...state,
                movieDetail: action.payload
            }
        case "SET_PAGES":
            return {
                ...state,
                pages: action.payload 
            }
        case "SET_KEYWORD":
            return {
                ...state,
                keyword: action.payload
            }
        case "SET_ERROR_MESSAGE":
            return {
                ...state,
                errorMsg: action.payload
            }
        default:
            return state;
    }
}

export default MovieReducer;