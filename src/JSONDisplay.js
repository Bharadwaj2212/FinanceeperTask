import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jsonData from './data.json';

const JSONDisplay = () => {
    const [isDataRead, setIsDataRead] = useState('read');
    const [data, setData] = useState([]);
    console.log(data);
    onPressRead = () => {
        AsyncStorage.setItem("JD",JSON.stringify(jsonData), (error) => {
            if(!error){
                setIsDataRead('show');
            }
        })
    }

    onPressDisplay = () => {
        AsyncStorage.getItem("JD", (error, result) => {
            if (!error) {
                const userData = JSON.parse(result);
                setIsDataRead('display');
                setData(userData);
            }
        })
    }

    return (
    <ScrollView>
        {
    isDataRead === 'read'
    ? <View style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => onPressRead()} style={{ border: 1, padding: 10, borderRadius: 20, backgroundColor: '#32a852'}}>
            <Text>Read JSON</Text>
        </TouchableOpacity>
     </View>
    : isDataRead === 'show'
        ?<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
        <TouchableOpacity onPress={() => onPressDisplay()} style={{ border: 1, padding: 10, borderRadius: 20, backgroundColor: '#32a852'}}>
            <Text>Display JSON</Text>
        </TouchableOpacity>
     </View>: <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 20}}>
                <Text style={{ width: '12%', textAlign: 'center'}}>User Id</Text>
                <Text style={{ width: '38%', textAlign: 'center'}}>Title</Text>
                <Text style={{ width: '50%', textAlign: 'center'}}>Body</Text>
            </View>
            {
                data.map((eachText, index) => (
                    <View style={{ flexDirection: 'row', paddingVertical: 20, backgroundColor: index%2 == 0 ? '#daeddf': ''}} key={index}>
                        <Text style={{ width: '12%', textAlign: 'center'}}>{eachText.userId}</Text>
                        <Text style={{ width: '38%', textAlign: 'left'}}>{eachText.title}</Text>
                        <Text style={{ width: '50%', textAlign: 'left'}}>{eachText.body}</Text>
                    </View>
                    
                ))
            }
     </View>
     }
     </ScrollView>)
}
export default JSONDisplay;