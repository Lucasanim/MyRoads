import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import RoadListScreen from '../screens/RoadListScreen'
import RoadDetailScreen from '../screens/RoadDetailScreen'

const Stack = createStackNavigator()

const RoadStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="RoadList" component={RoadListScreen} />
            <Stack.Screen name="RoadDetail" component={RoadDetailScreen} />
            {/* <Stack.Screen name="" component={} /> */}
        </Stack.Navigator>
    )
}

export default RoadStack