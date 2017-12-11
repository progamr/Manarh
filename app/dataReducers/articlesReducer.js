import ArticlesService from './../services/ArticlesService';

export const actionTypes = {
    GET_ARTICLES: 'ARTICLES/GET_ARTICLES',
    GET_ARTICLES_PENDING: 'ARTICLES/GET_ARTICLES_PENDING',
    GET_ARTICLES_FULFILLED: 'ARTICLES/GET_ARTICLES_FULFILLED',
    GET_ARTICLES_REJECTED: 'ARTICLES/GET_ARTICLES_REJECTED',
};

const initialState = {
    isPending: false,
    articles: [],
    error: null
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ARTICLES_PENDING:
            return {
                ...state,
                articles: [],
                isPending: true
            }
        case actionTypes.GET_ARTICLES_FULFILLED:
            return {
                ...state,
                isPending: false,
                articles: action.payload
            }
        case actionTypes.GET_ARTICLES_REJECTED:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case actionTypes.GET_ARTICLES_REJECTED:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const actionCreators = {
    getArticles: (apiKey) => ({
        type: actionTypes.GET_ARTICLES,
        payload: ArticlesService.getArticles(apiKey)
            .then((res) => {

            }).catch((error) => {

            })
    }),
    /*searchArticles: (searchedText) => ({
        type: actionTypes.SEARCH_ARTICLES,
        payload: searchedText
    })*/
}