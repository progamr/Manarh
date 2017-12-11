// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { ProfileNavigator } from '../navigationConfiguration'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
// Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.profile
    }
}

class ProfileMain extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'حسابي',
        tabBarIcon: ({ tintColor }) => <Ionicons size={ 25 } name={ 'md-person' } color={ tintColor }/>
    }

    render(){
        const { navigationState, dispatch } = this.props
        return (
            <ProfileNavigator
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
export default connect(mapStateToProps)(ProfileMain)