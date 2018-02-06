// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

// App Data
import ArticlesReducer from './../dataReducers/articlesReducer';
import userApiKeyReducer from './../dataReducers/userApiKeyReducer';

// Navigation
//import { NavigatorTabOne } from '../tabOne/navigationConfiguration'
import { FeedsListNavigator } from './../screens/feedsList/navigationConfiguration'
import { CreateFeedsNavigator } from './../screens/createFeeds/navigationConfiguration'
import { SearchFeedsNavigator } from './../screens/searchFeeds/navigationConfiguration'
import { ProfileNavigator } from './../screens/profile/navigationConfiguration'
import { SettingsNavigator } from './../screens/settings/navigationConfiguration'
import { tabBarReducer } from './../tabBar/navigationConfiguration'

// Middleware
const middleware = () => {
    return applyMiddleware(logger)
}

export default createStore(
    combineReducers({
        // app data
        articles: ArticlesReducer,
        userApiKey: userApiKeyReducer,

        // navigation tabs reducers
        tabBar: tabBarReducer,
        feedsList: (state,action) => FeedsListNavigator.router.getStateForAction(action,state),
        createFeeds: (state,action) => CreateFeedsNavigator.router.getStateForAction(action,state),
        searchFeeds: (state,action) => SearchFeedsNavigator.router.getStateForAction(action,state),
        profile: (state,action) => ProfileNavigator.router.getStateForAction(action,state),
        settings: (state,action) => SettingsNavigator.router.getStateForAction(action,state),

    }),
    middleware(),
)