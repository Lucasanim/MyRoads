import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    
} from 'react-native'

import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps'

const RoadDetailScreen = ({route}) => {

    const Road = route.params.item
    const first = Road.roads[0]
    const last = Road.roads[Road.roads.length -1]
    console.log('first: ', first)

    return(
        <View style={styles.container} >
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map}

                loadingEnabled
                loadingBackgroundColor="white"
                rotateEnabled={false}

                initialCamera={{
                    altitude: 15000,
                    center: {
                        latitude: first.coords.latitude,
                        longitude: first.coords.longitude,
                    },
                    heading: 0,
                    pitch: 0,
                    zoom: 11,
                }}
                
                
            >
                <Polyline 
                    coordinates={Road.roads.map( loc => loc.coords)}
                    strokeWidth={10}
                    fillColor="rgba(0, 0, 0, 1)"
                    strokeColor="rgba(255, 0, 99, 0.7)"
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFillObject,
        height:400,
    },
    map:{
        ...StyleSheet.absoluteFillObject,
    }, 
})

export default RoadDetailScreen