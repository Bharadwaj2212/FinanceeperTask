import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SelfieScreen = () => {
    const [image, setImage] = useState('');
    useEffect(() => {
        launchCamera(
            {
                mediaType: 'photo',
                cameraType: 'front',
                includeBase64: true
            },
            (responseObj) => {
            console.log(responseObj);
            if(!responseObj.didCancel){
                setImage(responseObj.assets[0])
            }
        });
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
              image === ''
                ? <Text>Selfie!!</Text>
                : <Image
                    resizeMode="cover"
                    resizeMethod="scale"
                    style={{width: 350, height: 350}}
                    source={{ uri: image.uri }}>

                </Image>
            }
        </View>
    );
  }
export default SelfieScreen;