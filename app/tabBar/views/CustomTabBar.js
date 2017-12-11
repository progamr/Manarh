import React from 'react';
import { TabBarTop } from 'react-navigation';

export default class CustomTabBar extends React.Component {
    render(){
        return (
            <TabBarTop
                {...this.props}
                style={{
                    //backgroundColor: 'red',
                    //activeTintColor: 'yellow',
                    //inactiveTintColor: 'yellow',
                    //activeBackgroundColor: "green",
                    //inactiveBackgroundColor: "purple",
                    /*tabStyle: {
                        backgroundColor: 'purple',
                        height: 50
                    }*/
                }}
                showIcon={true}
            />

        )
        /*return (
            <TabBarBottom
                {...this.props}
                style={{
                    activeTintColor: 'yellow',
                    inactiveTintColor: 'yellow',
                    // background color is for the tab component
                    //backgroundColor: '#222222',
                    inactiveBackgroundColor: 'yellow',
                    activeBackgroundColor: 'yellow',
                }}
            />
        )*/
    }
}