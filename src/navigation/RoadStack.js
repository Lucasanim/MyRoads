import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import RoadListScreen from '../screens/RoadListScreen'
import RoadDetailScreen from '../screens/RoadDetailScreen'

const Stack = createStackNavigator()

const RoadStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="RoadList" component={RoadListScreen} 
                options={()=>({
                    headerShown:false
                })}
            />
            <Stack.Screen name="RoadDetail" component={RoadDetailScreen} 
                options={() => ({
                    title:'Detalles de su ruta.'
                })}
            />
            {/* <Stack.Screen name="" component={} /> */}
        </Stack.Navigator>
    )
}

export default RoadStack