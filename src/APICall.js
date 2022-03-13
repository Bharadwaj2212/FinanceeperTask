import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView
} from 'react-native';

const APICall = () => {
    const [apiData, setAPIData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then((response) => {
                setIsLoading(false);
                setAPIData(response);
                console.log(response);
            }).catch(() => {})

  
    }, [])

    return (
        <>
            {
                isLoading
                    ?  <ActivityIndicator  size={'large'}/>
                    : null
            }
             <ScrollView>
                {
                    apiData === []
                        ? <Text>No Data!!</Text>
                        : 
                
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 20}}>
                        <Text style={{ width: '15%', textAlign: 'center'}}>Id</Text>
                        <Text style={{ width: '15%', textAlign: 'center'}}>User Id </Text>
                        <Text style={{ width: '70%', textAlign: 'center'}}>Title</Text>
                    </View>
                    {
                        apiData.map((eachText, index) => (
                            <View style={{ flexDirection: 'row', paddingVertical: 20, backgroundColor: index%2 == 0 ? '#daeddf': ''}} key={index}>
                                <Text style={{ width: '15%', textAlign: 'center'}}>{eachText.id}</Text>
                                <Text style={{ width: '15%', textAlign: 'center'}}>{eachText.userId}</Text>
                                <Text style={{ width: '70%', textAlign: 'center'}}>{eachText.title}</Text>
                            </View>
                            
                        ))
                    }
            </View>
            }
     
     </ScrollView>
        </>
    );
  }
export default APICall;