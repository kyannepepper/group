import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
export default function CreateGroup(props) {
  const [username, setUsername] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [friends, setFriends] = React.useState("");

  function createGroup(props) {
    console.log("RUNNING");
    var data = "description=" + encodeURIComponent(description);
    data += "&group_name=" + encodeURIComponent(username);
    fetch('http://172.20.10.3:3030/api/groups', {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    }).then(res => {
      console.log("What is happening here: ");
      console.log(res.status);
      if (res.status === 200) {
        props.setCreating(true);
      } else {
        alert("Unable to create Group");
      }
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <View style={styles.container}>
    <View style={{backgroundColor: '#7839a4', width: Dimensions. get('window'). width, alignItems: 'center', height: 100, justifyContent: 'space-between', flex: 0, flexDirection: 'row', paddingTop:20, marginBottom: 20,}}>
    <Image
  source={ require("./assets/logo.png") }
  style={{marginLeft: 30, marginBottom: 0, width: 100, height: 70, resizeMode: 'contain' }}></Image>
    <Image
  source={ require("./assets/settings.png") }
  style={{marginLeft: 30, marginBottom: 0, width: 100, height: 50, resizeMode: 'contain' }}></Image>
    </View>
  <View style={styles.holder}>
      <Text style={{fontSize: 30, marginBottom: 5, color: 'white', }}>Create Group</Text>
    <View
  style={{
    borderBottomColor: '#7839a4',
    borderBottomWidth: 3,
    width: 170,
    marginBottom: 25,
  }}
/>
    <View>
      <Text style={styles.formtitles}>Group Name</Text>
      <TextInput
        style={styles.inputs}
        placeholder="MyGroup"
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
          borderColor: '#979797',
          borderWidth: 1,
          width: 250,
          margin: 10,
          marginTop: 20,
          marginBottom: 20,
          color: 'white'}}
        placeholder=""
        placeholderTextColor = "#979797"
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
  <TouchableHighlight onPress={()=>{createGroup()}}
        style={{
          justifyContent: "center",
          width: 300,
          height: 50,
          alignItems: "center",
          backgroundColor: "#7839a4",
          borderRadius: 5,
          marginBottom: 10,
        }}>
         <Text style={{color: 'white'}}>Create Group</Text>
      </TouchableHighlight>
    
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
    flex: 0,
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
