// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { FeedsListNavigator } from '../navigationConfiguration'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
// Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.feedsList
    }
}

class FeedsMain extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'المقالات',
        
        tabBarIcon: ({ tintColor }) => <Ionicons size={ 25 } name={ 'md-book' } color={ tintColor }/>
    }

    render(){
        const { navigationState, dispatch } = this.props
        return (
            <FeedsListNavigator
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState
                    })
                }
            />
        )
    }
}

export default connect(mapStateToProps)(FeedsMain)