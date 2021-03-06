import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';
import CreateGroup from '../CreateGroup';
import GroupClickable from '../GroupClickable';

export default function groupsScreen() {
  const [creating, setCreating] = useState(true);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch('http://172.20.10.3:3030/api/groups', {
      method: "GET",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then(async res => {
      console.log("What is happening here: ");
      if (res.status === 200) {
        let data = await res.text();
        data = JSON.parse(data);
        setGroups(data);
      } else {
        alert("Unable to create Group");
      }
    }).catch(err => {
      console.log(err);
    });
  }, [])

  const groupComponents = groups.map(group => (<GroupClickable title={group.group_name} isGroup={true} description={group.description}></GroupClickable>));

  return (
    <>
    { creating ? 
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


      {groupComponents}
    <TouchableHighlight onPress={() => {setCreating(false)}}><View style={styles.infobox}><Text style={{color: 'white', fontSize: 30, textAlign: 'center',}}>+ Create Group</Text></View></TouchableHighlight>
    </View>
    :
    <CreateGroup setCreating={setCreating}/>
    }
    </>
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