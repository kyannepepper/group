import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  

  function changePage() {
      navigation.navigate("SignUp")
  }

  return (
    <View style={styles.container}>
  
        
    <View style={styles.infobox}>
        <Text style={{color: 'white',}}> Kyanne is a poop and she eats poop and she likes the smell of  chindfa;knf;lkdsj l;s jlks df;lkj as;l sa;lj a;lskj ;lask j;lak j;lasd j;laks j;lka js;laks </Text>
    
    </View>
    <Image
  source={ require("./assets/women.jpg") }
  style={{ marginLeft: 10, marginTop: 0, marginBottom: 0,  width: 50, height: 50, resizeMode: 'contain', borderBottomLeftRadius: 50, borderBottomRightRadius: 50,borderTopLeftRadius: 50, borderTopRightRadius: 50, overflow: 'hidden', }}></Image>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#1B1D21',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        margin: 5,
        marginTop:30,
        marginRight: 10,
      },
    infobox: {
      backgroundColor: '#323232',
      maxWidth: (Dimensions. get('window'). width) * .7,
      padding: 20,
      flex:0,
      flexDirection:'row',
      justifyContent:'space-around',
      borderRadius: 10,
      alignItems: 'center',

   }
  });