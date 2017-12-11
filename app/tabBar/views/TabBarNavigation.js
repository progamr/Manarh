// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { TabBar } from './../navigationConfiguration'

//Redux
// use connect to trigger props changes in redux and update the coresponding UI props
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabBar,
    }
}

class TabBarNavigation extends React.Component {

    render(){
        const { dispatch, navigationState } = this.props
        return (
            <TabBar
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState,
                    })
                }
            />
        )
    }
}

export default connect(mapStateToProps)(TabBarNavigation)