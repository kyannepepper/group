import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
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
    <View style={{}}>
    <Text style={{color: 'white', marginLeft:69, marginTop:30,}}>AlexJKlimb</Text>
    <View style={styles.container}>
  <Image
  source={ require("./assets/women.jpg") }
  style={{ marginTop: 0, marginBottom: 0, marginRight:10, width: 50, height: 50, resizeMode: 'contain', borderBottomLeftRadius: 50, borderBottomRightRadius: 50,borderTopLeftRadius: 50, borderTopRightRadius: 50, overflow: 'hidden', }}></Image>
        
    <View style={styles.infobox}>
        <Text style={{color: 'white'}}> Kyanne is a poop and she eats poop and she likes the smell of </Text>
    
    </View>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#1B1D21',
        alignItems: 'flex-start',
        flexDirection: 'row',
        margin: 5,
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