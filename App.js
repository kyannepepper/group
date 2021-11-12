import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <Image
  source={ require("./assets/logo.png") }
  style={{margin: 30, width: 100, height: 50, resizeMode: 'contain' }}></Image>
    <View style={styles.haveaccount}>
    <ImageBackground resizeMode="cover"
  source={ require("./assets/people.png") }
  style={{ width: Dimensions. get('window'). width, height: 500, flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 375,
  justifyContent: 'center', }}>
    <TouchableHighlight onPress={()=>{this.onButtonPress()}}
        style={{
          justifyContent: "center",
          width: 300,
          height: 50,
          alignItems: "center",
          backgroundColor: "#7839a4",
          borderRadius: 5,
        }}>
         <Text style={{color: 'white'}}>Get Started</Text>
      </TouchableHighlight>
    <View style={{flex: 1, flexDirection: 'row', width: Dimensions. get('window'). width, alignItems: 'center', justifyContent: 'center',}}><Text style={styles.blue}>Already Have an account?</Text><TouchableHighlight onPress={()=>{this.onButtonPress()}}><Text style={styles.blue}>Login Here</Text></TouchableHighlight></View> 
</ImageBackground>
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions. get('window'). height,
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
