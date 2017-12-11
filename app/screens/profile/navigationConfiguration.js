import { StackNavigator } from 'react-navigation'

// Screens
import Profile from './views/Profile'

const routeConfiguration = {
    Profile: { screen: Profile},
}

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'Profile'
}

export const ProfileNavigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)