import { TabNavigator } from 'react-navigation'

// Tab-Navigators
//import TabOneNavigation from '../tabOne/views/TabOneNavigation'
import FeedsMain from './../screens/feedsList/views/FeedsMain'
import CreateFeedsMain from './../screens/createFeeds/views/CreateFeedsMain'
import SearchFeedsMain from './../screens/searchFeeds/views/SearchFeedsMain'
import ProfileMain from './../screens/profile/views/ProfileMain'
import SettingsMain from './../screens/settings/views/SettingsMain'
import CustomTabBar from './views/CustomTabBar';

const routeConfiguration = {
        FeedsMain: { screen: FeedsMain },
        createFeedsMain: { screen: CreateFeedsMain },
        searchFeedsMain: { screen: SearchFeedsMain },
        profile: { screen: ProfileMain },
        settings: { screen: SettingsMain },
}

const tabBarConfiguration = {

    //...other configs
    tabBarOptions: {
        //backgroundColor: 'red',
        //activeTintColor: '#D6E3F2',
        //inactiveTintColor: '#D6E3F2',
        tabStyle: {
            backgroundColor: '#1A1F3E',
            height: 60
        },
        iconStyle: {
            //backgroundColor: '#D6E3F2',
            //color: '#D6E3F2'
        },
        labelStyle: {
            fontFamily: 'Hacen Trarza',
            fontSize: 11
        }
    },
    showIcon: true,
    tabBarComponent: CustomTabBar,
    tabBarPosition: 'bottom'
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)

export const tabBarReducer = (state,action) => {
    if (action.type === 'JUMP_TO_TAB') {
        return { ...state, index:0 }
    } else {
        return TabBar.router.getStateForAction(action,state)
    }
}