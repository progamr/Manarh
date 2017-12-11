import { StackNavigator } from 'react-navigation'

// Screens
import CreateFeeds from './views/CreateFeeds'
import PreviewFeeds from './views/PreviewFeeds'

const routeConfiguration = {
    CreateFeeds: { screen: CreateFeeds },
    PreviewFeeds: { screen: PreviewFeeds },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'CreateFeeds'
}

export const CreateFeedsNavigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)