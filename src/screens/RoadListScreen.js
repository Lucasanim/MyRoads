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
        <View style={styles.container} >
            <View style={{margin:5}} />
            <FlatList 
                data={tracks}
                keyExtractor={(track) => track.id}
                renderItem={({item}) => {
                    return <TouchableOpacity
                        onPress={() => navigation.navigate('RoadDetail', {item})}
                        style={styles.textContainer}
                    >
                        <Text style={styles.text} >{item.title} </Text>
                        <Text style={styles.dateText} >{item.date} </Text>
                    </TouchableOpacity>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        
    },
    text:{
        fontSize: 22,
        padding: 10
    },
    textContainer:{
        width: '90%',
        backgroundColor:'#ededed',
        marginVertical:5,   
        borderRadius: 10,
        marginHorizontal:'5%'
    },
    dateText:{
        fontSize:16,
        padding:10,
        paddingTop:0,
        color:'black'
    },
})

export default RoadListScreen