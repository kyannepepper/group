import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
export default function CreateEvent(props) {
  const [username, setUsername] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [friends, setFriends] = React.useState("");

  function changePage() {
      navigation.navigate("SignUp")
  }

  return (
    
    <View style={styles.container}>
    <View style={{position:'fixe', backgroundColor: '#7839a4', width: Dimensions. get('window'). width, alignItems: 'center', height: 100, justifyContent: 'space-between', flex: 0, flexDirection: 'row', paddingTop:20,}}>
    <Image
  source={ require("./assets/logo.png") }
  style={{marginLeft: 30, marginBottom: 0, width: 100, height: 70, resizeMode: 'contain' }}></Image>
    <Image
  source={ require("./assets/settings.png") }
  style={{marginLeft: 30, marginBottom: 0, width: 100, height: 50, resizeMode: 'contain' }}></Image>
    </View>
    <ScrollView style={styles.scrollView}>
    
  <View style={styles.holder}>
    <Text style={{marginTop: 10, fontSize: 30, marginBottom: 5, color: 'white', }}>Create Event</Text>
    <View
  style={{
    borderBottomColor: '#7839a4',
    borderBottomWidth: 3,
    width: 170,
    marginBottom: 25,
  }}
/>
    <View>
      <Text style={styles.formtitles}>Event Name</Text>
      <TextInput
        style={styles.inputs}
        placeholder="MyEvent"
        placeholderTextColor = "#979797"
        onChangeText={username => setUsername(username)}
        defaultValue={username}
      />
    </View>
    <View>
      <Text style={styles.formtitles}>Description</Text>
      <TextInput
        style={{height: 100,
          fontSize: 17,
          width: 260,
          backgroundColor: '#121314',
          margin: 0,
          marginTop: 20,
          padding: 15,
          paddingTop: 10,
          marginBottom: 20,
        borderRadius: 5,}}
        placeholder="MyDescription"
        placeholderTextColor = "#5B5B5B"
        multiline={true}
        numberOfLines={3}
        onChangeText={description => setDescription(description)}
        defaultValue={description}
      />
    </View>
    <View>
      <Text style={styles.formtitles}>Add Friends</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Mark"
        placeholderTextColor = "#979797"
        onChangeText={friends => setFriends(friends)}
        defaultValue={friends}
      />
    </View>
      
  </View>
    
    <View style={{flex: 1, alignItems: 'center', marginTop: 50, marginBottom: 10,}}>
  <TouchableHighlight onPress={()=>{changePage()}}
        style={{
          justifyContent: "center",
          width: 300,
          height: 50,
          alignItems: "center",
          backgroundColor: "#7839a4",
          borderRadius: 5,
          marginBottom: 100,
        }}>
         <Text style={{color: 'white'}}>Create Event</Text>
      </TouchableHighlight>
    
    </View>
    </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#1B1D21',
    alignItems: 'center',
    
    
  },
  holder: {
    flex: 0,
    width: Dimensions. get('window'). width,
    paddingLeft: 50,
  },
  formtitles: {
    fontSize: 20,
    color: 'white',
  }, scrollView: {
    backgroundColor: '#1B1D21',
    height:9000
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
