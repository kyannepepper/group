import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
export default function GroupClickable(props) {
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

        <Text style={{color: 'white', fontSize: 30, textAlign: 'center',}}>{props.title}</Text>
        {props.isGroup &&
          <View style={{flex: 0, flexDirection: 'row',  alignItems: 'center'}}>
            <Text style={{color: 'white'}}>Admin:</Text>
            <Image
              source={ require("./assets/women.jpg") }
              style={{ margin: 5, width: 50, height: 50, resizeMode: 'contain', borderBottomLeftRadius: 50, borderBottomRightRadius: 50,borderTopLeftRadius: 50, borderTopRightRadius: 50, overflow: 'hidden', }}></Image>
            <Text style={{color: 'white'}}>First Last</Text>
          </View>
        }
        
        <Text style={{color: 'white', }}>{'Description: ' + props.description}</Text>
    
    </View>


    </View>
  );
}

const styles = StyleSheet.create({
 
  infobox: {
    backgroundColor: '#323232',
    width: (Dimensions. get('window'). width) * .9,
    padding: 30,
    paddingLeft: 0,
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 30
  }
});