import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
export default function App(props) {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  function changePage() {
      navigation.navigate("SignUp")
  }

  return (
    <View style={styles.container}>
    <Image
  source={ require("./assets/logo.png") }
  style={{margin: 20, marginBottom: 0, width: 100, height: 70, resizeMode: 'contain' }}></Image>
  <View style={styles.holder}>
    <Text style={{fontSize: 30, marginBottom: 5, color: 'white', }}>Login</Text>
    <View
  style={{
    borderBottomColor: '#7839a4',
    borderBottomWidth: 3,
    width: 100,
    marginBottom: 25,
  }}
/>
    <View>
      <Text style={styles.formtitles}>Username</Text>
      <TextInput
        style={styles.inputs}
        placeholder="JohnKlein7"
        placeholderTextColor = "#979797"
        onChangeText={username => setUsername(username)}
        defaultValue={username}
      />
    </View>
    <View>
      <Text style={styles.formtitles}>Password</Text>
      <TextInput
        style={styles.inputs}
        placeholder="*******"
        placeholderTextColor = "#979797"
        onChangeText={password => setPassword(password)}
        defaultValue={password}
      />
    </View>
      
  </View>
    
    <View style={{flex: 1, alignItems: 'center', marginBottom: 10,}}>
  <TouchableHighlight onPress={()=>{changePage()}}
        style={{
          justifyContent: "center",
          width: 300,
          height: 50,
          alignItems: "center",
          backgroundColor: "#7839a4",
          borderRadius: 5,
          marginBottom: 10,
        }}>
         <Text style={{color: 'white'}}>Login</Text>
      </TouchableHighlight>
    <View style={{flex: 0, flexDirection: 'row', width: Dimensions. get('window'). width, alignItems: 'center', justifyContent: 'center',}}><Text style={styles.blue}>Don't have an account?</Text><TouchableHighlight onPress={()=>{props.setIsLoggingIn(false)}}><Text style={{fontSize: 17,
    fontFamily: 'Roboto',
    color: 'white',
    textAlign: "center",
    margin: 3,}}>Sign Up</Text></TouchableHighlight></View> 
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions. get('window'). height,
    backgroundColor: '#1B1D21',
    alignItems: 'center',
    
    
  },
  holder: {
    flex: 1,
    width: Dimensions. get('window'). width,
    paddingLeft: 50,
  },
  formtitles: {
    fontSize: 20,
    color: 'white',
  },
  inputs: {
    height: 35,
    fontSize: 17,
    borderBottomColor: '#979797',
    borderBottomWidth: 2,
    width: 250,
    margin: 10,
    color: 'white'
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
    color: '#d1d2d3',
  },
  blue: {
    fontSize: 17,
    color: '#979797',
    textAlign: "center",
    margin: 3,
  }
});
