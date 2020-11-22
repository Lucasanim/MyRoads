import React, {useEffect} from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,

 } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'

import { fetchLocalStorage, deleteRoad } from '../store/actions'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
                    return <View style={styles.textContainer} >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('RoadDetail', {item})}
                            style={styles.titleContainer}
                        >
                            <Text style={styles.text} >{item.title} </Text>
                            <Text style={styles.dateText} >{item.date} </Text>
                            
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => dispatch(deleteRoad(item.id))}
                            style={styles.deleteButton}
                        >
                            <Icon name="delete-circle-outline" size={40}/>
                        </TouchableOpacity>
                    </View>
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
        marginHorizontal:'5%',
        flexDirection:'row'
    },
    titleContainer:{
        flex:1,
        justifyContent:'center'
    },
    deleteButton:{
        flex:0.3,
        alignItems:'center',
        justifyContent:'center',
    },
    dateText:{
        fontSize:16,
        padding:10,
        paddingTop:0,
        color:'black'
    },
})

export default RoadListScreen