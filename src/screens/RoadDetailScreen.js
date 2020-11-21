import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native'

const RoadDetailScreen = ({route}) => {

    const Road = route.params.item
    console.log(Road)

    return(
        <View>
            <Text>{Road.title} </Text>
            {/* <Text>{Road.roads.coords} </Text> */}
            <FlatList 
                data={Road.roads}
                renderItem={({item}) => {
                    return<Text>{item.coords.latitude} </Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default RoadDetailScreen