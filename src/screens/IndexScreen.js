import React, {useState, useEffect} from 'react'
import {View, 
    Text, 
    StyleSheet,
    PermissionsAndroid,
    TouchableOpacity,
    ToastAndroid,
    Platform,
    } from 'react-native'
import Map from '../components/Map'

import Geolocation from 'react-native-geolocation-service';

const IndexScreen = () => {
    //renders map

    const [location, setLocation] = useState(null)
    const [recording, setRecording] = useState(true)
    const [watchId, setWatchId] = useState(null)

    console.log(recording)

    async function  hasLocationPermission(){
      //request and check location permission

        // if (Platform.OS === 'ios') {
        //   const hasPermission = await this.hasLocationPermissionIOS();
        //   return hasPermission;
        // }
    
        if (Platform.OS === 'android' && Platform.Version < 23) {
          return true;
        }
    
        const hasPermission = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
    
        if (hasPermission) {
          return true;
        }
    
        const status = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
    
        if (status === PermissionsAndroid.RESULTS.GRANTED) {
          return true;
        }
    
        if (status === PermissionsAndroid.RESULTS.DENIED) {
          ToastAndroid.show(
            'Location permission denied by user.',
            ToastAndroid.LONG,
          );
        } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          ToastAndroid.show(
            'Location permission revoked by user.',
            ToastAndroid.LONG,
          );
        }
    
        return false;
      };

    const getCurrentLoc = async () => {
        //Obteins actual location and set the location state
        
        const hasLocationPermissions = await hasLocationPermission();

        if (!hasLocationPermissions) {
        return;
        }

        Geolocation.getCurrentPosition(
            (position) => {
              console.log('pos:', position);
              setLocation(position)
            },
            (error) => {
              // See error code charts below.
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, forceRequestLocation: true }
        );
    }

    const getLocationUpdates = async () => {
        //Update location

        const hasLocationPermissions = await hasLocationPermission();
    
        if (!hasLocationPermissions) {
          return;
        }
    
        if(recording){
            let id = Geolocation.watchPosition(
                (position) => {
                setLocation(position)
                console.log('watchid: ',position);
                },
                (error) => {
                console.log(error);
                },
                {
                enableHighAccuracy: true,
                distanceFilter: 0,
                interval: 5000,
                fastestInterval: 2000,
                forceRequestLocation: false,
                showLocationDialog: true,
                useSignificantChanges: false,
                },
            );
            setWatchId(id)
        }
    
    };

    const startLocationUpdates = async () => {
        //starts the tracking again
        setRecording(true)
        getLocationUpdates()
    }

    const stopLocationUpdates = () => {
        //stops the tracking

        if (watchId !== null) {
            Geolocation.clearWatch(watchId);
            setWatchId(null)
            setRecording(false)
          }
    }

    useEffect(() => {
      //obtain current location and updates
        getCurrentLoc()
        getLocationUpdates()
    },[recording])

    return (
        <View style={styles.container} >
            <Map coords={location ?location.coords : null} />
            {
                recording
                ? <TouchableOpacity
                    onPress={() => stopLocationUpdates() }
                    style={styles.button}
                >
                    <Text style={styles.buttonText} >Dejar de grabar.</Text>
                </TouchableOpacity>
                :<TouchableOpacity
                    onPress={()=>{
                        startLocationUpdates()
                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText} >Empezar a grabar.</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    flex:1,
    justifyContent: 'flex-end',
  },
  button:{
    backgroundColor:'gray',
    margin:5,
  },
  buttonText:{
    fontSize:20,
    paddingVertical:10,
    paddingHorizontal:20,
  },  
})

export default IndexScreen