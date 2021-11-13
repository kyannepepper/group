import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
export default function groupsScreen() {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
    
    <View style={{backgroundColor: '#7839a4', width: Dimensions. get('window'). width, alignItems: 'center', height: 100, justifyContent: 'space-between', flex: 0, flexDirection: 'row', paddingTop:20,}}>
    <Image
  source={ require("../assets/logo.png") }
  style={{marginLeft: 30, marginBottom: 0, width: 100, height: 70, resizeMode: 'contain' }}></Image>
    <Image
  source={ require("../assets/settings.png") }
  style={{marginLeft: 30, marginBottom: 0, width: 100, height: 50, resizeMode: 'contain' }}></Image>
    </View>
    <ScrollView style={styles.scrollView}>

    <View style={styles.infobox}><Text style={{color: 'white', fontSize: 30, textAlign: 'center',}}>+ Create Group</Text></View>
    
    </ScrollView>

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
  scrollView: {
    backgroundColor: '#1B1D21',
    height:9000
},
  infobox: {
    backgroundColor: '#323232',
    width: (Dimensions. get('window'). width) * .9,
    padding: 20,
    paddingLeft: 0,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  }
});