import React, {useEffect, useState, useRef} from 'react'
import {View,Text,StyleSheet, PermissionsAndroid, Platform} from 'react-native'

import MapView ,{PROVIDER_GOOGLE, Circle} from 'react-native-maps'

import Geolocation from 'react-native-geolocation-service';

const Map = ({coords}) => {

    //const [currentLoc, setCurrentLoc] = useState(null)

    const mapRef = useRef(null)

    

    useEffect(() => {
        // getCurrentLoc()
        if (!!coords && mapRef.current) {
            mapRef.current.animateCamera({
              center: {
                latitude: coords.latitude,
                longitude: coords.longitude,
              },
              pitch: 0,
              heading: 0,
              altitude: 1000,
              zoom: 16,
            });
        }
    },[coords])


    return(
        <View style={styles.container} >
            <MapView 
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={styles.map}

                loadingEnabled
                loadingBackgroundColor="white"
                rotateEnabled={false}

                initialCamera={{
                    altitude: 15000,
                    center: {
                        latitude: 23.7603,
                        longitude: 90.4125,
                    },
                    heading: 0,
                    pitch: 0,
                    zoom: 11,
                }}
                
                
            >
                {!!coords && (
                    <Circle
                        center={{
                                latitude: coords.latitude,
                                longitude: coords.longitude,
                            }}
                        radius={coords.accuracy}
                        strokeColor="rgba(158,158,255,1.0)"
                        fillColor="rgba(158,158,255,0.3)"
                    />
                ) }
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

export default Map