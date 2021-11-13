import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
export default function App(props) {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [username, setUsername] = React.useState("Chinese");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function signUp() {
    var data = "first_name=" + encodeURIComponent(fname);
    data += "&last_name=" + encodeURIComponent(lname);
    data += "&username=" + encodeURIComponent(username);
    data += "&password=" + encodeURIComponent(password);
    data += "&email=" + encodeURIComponent(email);
    fetch('http://172.20.10.3:3030/auth/signUp', {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    }).then(res => {
      console.log("What is happening here: ");
      if (res.status !== 400) {
        props.setIsLoggedIn(true);
      } else {
        alert("Username already taken")
      }
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
    <Image
  source={ require("./assets/logo.png") }
  style={{margin: 20, marginBottom: 10, width: 100, height: 70, resizeMode: 'contain' }}></Image>
  <View style={styles.holder}>
    <Text style={{fontSize: 30, marginBottom: 5, color: 'white', }}>Sign Up</Text>
    <View
  style={{
    borderBottomColor: '#7839a4',
    borderBottomWidth: 3,
    width: 100,
    marginBottom: 25,
  }}
/>
    <View>
      <Text style={styles.formtitles}>First Name</Text>
      <TextInput
        style={styles.inputs}
        placeholder="John"
        placeholderTextColor = "#979797"
        onChangeText={fname => setFname(fname)}
        defaultValue={fname}
      />
    </View>
    <View>
      <Text style={styles.formtitles}>Last Name</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Klein"
        placeholderTextColor = "#979797"
        onChangeText={lname => setLname(lname)}
        defaultValue={lname}
      />
    </View>
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
      <Text style={styles.formtitles}>Email</Text>
      <TextInput
        style={styles.inputs}
        placeholder="John.Klein@gmail.com"
        placeholderTextColor = "#979797"
        onChangeText={email => setEmail(email)}
        defaultValue={email}
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
    
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: 10,}}>
  <TouchableHighlight onPress={()=>{signUp()}}
        style={{
          marginTop: 30,
          justifyContent: "center",
          width: 300,
          height: 50,
          alignItems: "center",
          backgroundColor: "#7839a4",
          borderRadius: 5,
          marginBottom: 30,
        }}>
         <Text style={{color: 'white'}}>Sign Up</Text>
      </TouchableHighlight>
    <View style={{flex: 0, flexDirection: 'row',marginBottom:100, width: Dimensions. get('window'). width, alignItems: 'center', justifyContent: 'center',}}><Text style={styles.blue}>Already have an account?</Text><TouchableHighlight onPress={()=>{props.setIsLoggingIn(true)}}><Text style={{fontSize: 17,
    color: 'white',
    textAlign: "center",
    margin: 10,}}>Login</Text></TouchableHighlight></View> 
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
     scrollView: {
      backgroundColor: '#1B1D21',
      height:9000
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
