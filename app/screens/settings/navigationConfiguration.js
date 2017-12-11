import { StackNavigator } from 'react-navigation'

// Screens
import Settings from './views/Settings'

const routeConfiguration = {
    Settings: { screen: Settings},
}

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'Settings'
}

export const SettingsNavigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)