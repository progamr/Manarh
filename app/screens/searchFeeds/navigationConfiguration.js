import { StackNavigator } from 'react-navigation'

// Screens
import SearchFeeds from './views/SearchFeeds'

const routeConfiguration = {
    SearchFeeds: { screen: SearchFeeds},
}

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'SearchFeeds'
}

export const SearchFeedsNavigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)