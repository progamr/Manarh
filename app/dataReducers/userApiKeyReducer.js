import ArticlesService from './../services/ArticlesService';

export const actionTypes = {
    GET_KEY: 'USER_KEY/GET_KEY',
    /*GET_KEY_PENDING: 'USER_KEY/GET_KEY_PENDING',
    GET_KEY_FULFILLED: 'USER_KEY/GET_KEY_FULFILLED',
    GET_KEY_REJECTED: 'USER_KEY/GET_KEY_REJECTED',*/
};

const initialState = {
    key : null,
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_KEY:
            return {
                ...state,
                key: action.payload
            }
        default:
            return state;
    }
}

export const apiKeyActionCreators = {
    getApiKey: (apiKey) => ({
        type: actionTypes.GET_KEY,
        payload: apiKey
    }),
}