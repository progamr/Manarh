import { StackNavigator } from 'react-navigation'

// Screens
import FeedsList from './views/FeedsList'
import FeedsItem from './views/FeedsItem'

const routeConfiguration = {
    FeedsList: { screen: FeedsList },
    FeedsItem: { screen: FeedsItem },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'FeedsList'
}

export const FeedsListNavigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)