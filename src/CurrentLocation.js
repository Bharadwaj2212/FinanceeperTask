import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

const CurrentLocation = () => {
    const [currentLoc, setCurrentLoc] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            .then((result) => {
                switch (result) {
                    case RESULTS.DENIED:
                        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
                            if (result == RESULTS.GRANTED || result == RESULTS.LIMITED) {
                               getLocation();
                            } 
                        }).catch((err) => {
                        
                        });
                        break;
                    case RESULTS.LIMITED:
                        getLocation();
                        break;
                    case RESULTS.GRANTED:
                        getLocation();
                        break;
                }
            })
            .catch((error) => {
            })
       
    }, [])

    const getLocation = () => {
        setIsLoading(true);
        Geolocation.getCurrentPosition(
            (position) => {
                setIsLoading(false);
                setCurrentLoc(position);
            },
            (error) => {
                setIsLoading(false);
              // See error code charts below.
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
              currentLoc === ''
                ? <Text>No Location!!</Text>
                : <View>
                    <Text>Latitude : {currentLoc?.coords?.latitude}</Text>
                    <Text>Longitude : {currentLoc?.coords?.longitude}</Text>
                </View>
            }
            {
                isLoading
                    ?  <ActivityIndicator  size={'large'}/>
                    : null
            }
        </View>
    );
  }
export default CurrentLocation;