import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import RoadStack from './RoadStack'
import CreateRoadScreen from '../screens/CreateRoadScreen'

const BottomTab = createMaterialBottomTabNavigator()

const ButtonTabNav = () =>{
    return(
        <BottomTab.Navigator>
            <BottomTab.Screen name="Index" component={RoadStack} />
            <BottomTab.Screen name="Create" component={CreateRoadScreen} />
            {/* <BottomTab.Screen name="" component={} /> */}
        </BottomTab.Navigator>
    )
}

export default ButtonTabNav