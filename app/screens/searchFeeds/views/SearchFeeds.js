import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class SearchFeeds extends React.Component {
    render(){
        return(
            <View style={{
                flex:1,
                backgroundColor:'orange',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text>{ 'Search Feeds in here' }</Text>
                <TouchableOpacity
                    onPress={ () => this.props.navigation.goBack() }
                    style={{
                        padding:20,
                        borderRadius:20,
                        backgroundColor:'purple',
                        marginTop:20
                    }}>
                    <Text>{'Go back a screen this tab'}</Text>
                </TouchableOpacity>

            </View>
        )
    }
}