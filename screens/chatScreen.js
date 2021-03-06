import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { withOrientation } from 'react-navigation';
import RecievedMessage from '../RecievedMessage';
import KeyboardListener from 'react-native-keyboard-listener';
import SentMessage from '../SentMessage';

export default function App() {
  const [input, setInput] = React.useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState(true);


  return (
    <View style={styles.container}>
    <View style={{backgroundColor: '#7839a4', width: Dimensions. get('window'). width, alignItems: 'center', height: 100, justifyContent: 'space-between', flex: 0, flexDirection: 'row', paddingTop:30, padding: 20}}>
    <TouchableHighlight onPress={()=>{}}><Text style={{color: 'white', fontSize: 20,}}> &#60; Pickle Ball Paddle</Text></TouchableHighlight> 
    <Image
  source={ require("../assets/settings.png") }
  style={{marginLeft: 30, marginBottom: 0, width: 100, height: 50, resizeMode: 'contain' }}></Image>
    </View>

    <ScrollView style={styles.scrollView}>
    <View>
    <RecievedMessage></RecievedMessage>
    <SentMessage></SentMessage>
    <SentMessage></SentMessage>
    </View>
    </ScrollView>
    <View style={{flex: 0, alignItems: 'flex-end', margin: 20, marginTop: 10}}>
    <KeyboardListener 
       onWillShow={() => { setIsKeyboardOpen(false)}}
       onWillHide={() => { setIsKeyboardOpen(true)}}
      />
      <TextInput
        style={isKeyboardOpen ? styles.textInput : {...styles.textInput, marginBottom: 180,}}
        placeholder="Message..."
        placeholderTextColor = "#979797"
        onChangeText={input => setInput(input)}
        defaultValue={input}
      />
    </View>
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions. get('window'). height,
    backgroundColor: '#1B1D21', 
    flexDirection: 'column',
  },
  scrollView: {
    backgroundColor: '#1B1D21',
    height:9000,
},
  textInput: 
    {flex: 0, color: 'white', borderRadius: 30, borderColor: 'white', borderWidth: 1, width: Dimensions. get('window'). width - 40, padding: 10, paddingLeft: 20,},
  
});