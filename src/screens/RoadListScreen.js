import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,

 } from 'react-native'

import { useSelector } from 'react-redux'

const RoadListScreen = ({navigation}) => {

    const tracks = useSelector((state) => state.locations)

    return(
        <View>
            <FlatList 
                data={tracks}
                keyExtractor={(track) => track.id}
                renderItem={({item}) => {
                    return <TouchableOpacity
                        onPress={() => navigation.navigate('RoadDetail', {item})}
                    >
                        <Text>{item.title} </Text>
                    </TouchableOpacity>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default RoadListScreen