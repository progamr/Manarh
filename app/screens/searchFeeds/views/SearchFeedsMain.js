// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { SearchFeedsNavigator } from '../navigationConfiguration'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
// Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.searchFeeds
    }
}

class SearchFeedsMain extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'البحث',
        tabBarIcon: ({ tintColor }) => <Ionicons size={ 25 } name={ 'md-search' } color={ tintColor }/>
    }

    render(){
        const { navigationState, dispatch } = this.props
        return (
            <SearchFeedsNavigator
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
export default connect(mapStateToProps)(SearchFeedsMain)