// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { SettingsNavigator } from '../navigationConfiguration'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
// Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.settings
    }
}

class SettingsMain extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'الظبط',
        tabBarIcon: ({ tintColor }) => <Ionicons size={ 25 } name={ 'md-settings' } color={ tintColor }/>
    }
    render(){
        const { navigationState, dispatch } = this.props
        return (
            <SettingsNavigator
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
export default connect(mapStateToProps)(SettingsMain)