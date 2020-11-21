import React, {useEffect, useState} from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,

 } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'

import { fetchLocalStorage } from '../store/actions'

const RoadListScreen = ({navigation}) => {
    //List all roads and fetch them from local storage

    const tracks = useSelector((state) => state.locations)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchLocalStorage())
    },[])

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