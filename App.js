import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions, Image, ImageBackground, TouchableHighlight } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import groupsScreen from './screens/groupsScreen';
import servicesScreen from './screens/servicesScreen';


const Tab = createBottomTabNavigator();


export default function App() {
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <>
    {isLoggedIn ? 
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Group" component={groupsScreen} />
          <Tab.Screen name="Services" component={servicesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      : 
      <View style={styles.container}>
      <Image
        source={ require("./assets/logo.png") }
        style={{margin: 30, width: 100, height: 50, resizeMode: 'contain' }}>
      </Image>
          <View style={styles.haveaccount}>
            <ImageBackground resizeMode="cover"
              source={ require("./assets/people.png") }
              style={{ width: Dimensions. get('window'). width, height: 500, flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 375,
              justifyContent: 'center', }}
            >
                <TouchableHighlight onPress={() => setIsLoggedIn(true)}
                  style={{
                    justifyContent: "center",
                    width: 300,
                    height: 50,
                    alignItems: "center",
                    backgroundColor: "#7839a4",
                    borderRadius: 5,
                  }}
                >
                  <Text style={{color: 'white'}}>Get Started</Text>
                </TouchableHighlight>
                <View style={{flex: 1, flexDirection: 'row', width: Dimensions. get('window'). width, alignItems: 'center', justifyContent: 'center',}}><Text style={styles.blue}>Already Have an account?</Text><TouchableHighlight onPress={()=>{this.onButtonPress()}}><Text style={styles.blue}>Login Here</Text></TouchableHighlight></View> 
            </ImageBackground>
          </View>
        </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window'). height,
    backgroundColor: '#1B1D21',
    justifyContent: 'space-between',
  },
  btcontainer: {
   flex: 1,
   padding: 30,
  },
  haveaccount: {

  height: 500
  },
  hatext: {
    height: 100,
    width: Dimensions. get('window'). width,
    backgroundColor: '#CDCDCD',
  },
  red: {
    fontSize: 30,
    fontFamily: 'Roboto',
    color: '#d1d2d3',
  },
  blue: {
    fontSize: 17,
    fontFamily: 'Roboto',
    color: '#1B1D21',
    textAlign: "center",
    margin: 3,
  }
});
