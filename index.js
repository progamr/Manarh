// React
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

// Redux
import { Provider } from 'react-redux'
import store from './app/store'

// Main Manarh app Navigation
import TabBarNavigation from './app/tabBar/views/TabBarNavigation'

class App extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <TabBarNavigation />
            </Provider>
        )
    }
}
AppRegistry.registerComponent('Manarh', () => App);