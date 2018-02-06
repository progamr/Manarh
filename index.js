// React
import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import {Platform} from 'react-native';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';
// Redux
import { Provider } from 'react-redux'
import store from './app/store';
import {apiKeyActionCreators} from './app/dataReducers/userApiKeyReducer';


// Main Manarh app Navigation
import TabBarNavigation from './app/tabBar/views/TabBarNavigation'
import UsersService from "./app/services/UsersService";

class App extends React.Component {

    componentDidMount() {
        // iOS: show permission prompt for the first call. later just check permission in user settings
        // Android: check permission in user settings

        this.notificationListener = FCM.on(FCMEvent.Notification, async (notif) => {
            // optional, do some component related stuff
            if(notif.opened_from_tray){
                //iOS: app is open/resumed because user clicked banner
                //Android: app is open/resumed because user clicked banner or tapped app icon
                console.log('n received', notif);

            }
        });

        // initial notification contains the notification that launchs the app. If user launchs app by clicking banner, the banner notification info will be here rather than through FCM.on event
        // sometimes Android kills activity when app goes to background, and when resume it broadcasts notification before JS is run. You can use FCM.getInitialNotification() to capture those missed events.
        // initial notification will be triggered all the time even when open app by icon so send some action identifier when you send notification
        FCM.getInitialNotification().then(notif => {
            console.log(notif)
        });
    }
    componentWillUnmount() {
        // stop listening for events
        this.notificationListener.remove();
    }

    componentWillMount() {
        // on app start get the api key value from Async storage and save it to redux

        AsyncStorage.getItem('user@apiKey').then((val) => {
            val = (val === null) ? -1: val; // assign value to -1 if it is null
            // store api key in redux
            store.dispatch(apiKeyActionCreators.getApiKey(val));

            // if value is -1 then check permissions and get fcm token and register the app instance
            if(val === -1) {
                let granted = -1;
                // check permission
                FCM.requestPermissions()
                    .then(()=> {
                    console.log('granted');
                    granted = 1;
                }).catch(()=> {
                    console.log('notification permission rejected');
                });

                // get fcm token
                FCM.getFCMToken().then(token => {
                    console.log(token);
                    // register the app instance
                    UsersService.registerApp(token, granted);
                });
            } else {
                console.log('get me some Light');
            }
        });
    }

    render(){
        // the main tabar navigation pf the app
        return(
            <Provider store={store}>
                <TabBarNavigation />
            </Provider>
        )
    }
}

// register the app component
AppRegistry.registerComponent('Manarh', () => App);