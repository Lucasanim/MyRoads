import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import RoadStack from './RoadStack'
import CreateRoadScreen from '../screens/CreateRoadScreen'

import Icon from 'react-native-vector-icons/Feather'
import { Title } from 'react-native-paper'

const BottomTab = createMaterialBottomTabNavigator()

const ButtonTabNav = () =>{
    return(
        <BottomTab.Navigator
            shifting={true}
        >
            <BottomTab.Screen name="Index" component={RoadStack} 
                options={() => ({
                    tabBarIcon:({color,size})=> <Icon name="list" size={size} color={color} />,
                    title:'rutas',
                    tabBarColor:'#b30fff'
                })}
            />
            <BottomTab.Screen name="Create" component={CreateRoadScreen} 
                options={() => ({
                    tabBarIcon:({color,size})=><Icon name="map-pin" size={size} color={color} />,
                    title:'nueva'
                })}
            />
            {/* <BottomTab.Screen name="" component={} /> */}
        </BottomTab.Navigator>
    )
}

export default ButtonTabNav