// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { CreateFeedsNavigator } from '../navigationConfiguration'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
// Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.createFeeds
    }
}

class CreateFeedsMain extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'جديد',
        tabBarIcon: ({ tintColor }) => <Ionicons size={ 25 } name={ 'md-create' } color={ tintColor }/>
    }

    render(){
        const { navigationState, dispatch } = this.props
        return (
            <CreateFeedsNavigator
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
export default connect(mapStateToProps)(CreateFeedsMain)