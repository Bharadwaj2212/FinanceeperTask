import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

const image = { uri: "https://reactjs.org/logo-og.png" };

const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree", // Network image
    require("./images/image.png")
]
const HomeScreen = () => {
    return (
      <View style={{ flex: 1}}>
        <ImageBackground source={require("./images/image.png")} resizeMode="cover" style={{
            flex:1,
            justifyContent: 'center'
        }}>
            <SliderBox images={images} />
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });
  
export default HomeScreen;
  