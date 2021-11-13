import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
export default function GroupInvite() {
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
  

    <View style={styles.infobox}>
        
        <View style={{flex:0, flexDirection:'column'}}>
        <View style={{flex:0, flexDirection:'row'}}>
    <Image
  source={ require("./assets/women.jpg") }
  style={{ marginBottom: 0, width: 50, height: 50, resizeMode: 'contain', borderBottomLeftRadius: 50, borderBottomRightRadius: 50,borderTopLeftRadius: 50, borderTopRightRadius: 50, overflow: 'hidden', }}></Image>
        <View style={{flex:0, flexDirection:'column'}}>
        <Text style={{color: 'white', fontSize:18,}}>First Last</Text>
        <Text style={{color: 'white'}}>Invited You To Join</Text>
        </View>
        </View>
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center',}}>CHIMICHANGAS!!!!!</Text>
        </View>
        
        <View style={{flex: 0, flexDirection: 'column',}}>
            <Text style={{color: 'green', fontSize: 17, margin: 10,}}>Accept</Text>
            <Text style={{color: 'red',  fontSize: 17, margin: 10,}}>Decline</Text>
        </View>
    </View>
    

    </View>
  );
}

const styles = StyleSheet.create({
 
  infobox: {
    backgroundColor: '#323232',
    width: (Dimensions. get('window'). width) * .9,
    padding: 20,
    flex:0,
    flexDirection:'row',
    justifyContent:'space-around',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center'
,  }
});