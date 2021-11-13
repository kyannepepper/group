import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Dimensions } from 'react-native';

import GroupClickable from '../GroupClickable'

export default function servicesScreen() {
  const des = "Create a poll/vote to decide something for your group"

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={ require("../assets/logo.png") }
          style={{marginLeft: 30, marginBottom: 0, width: 100, height: 70, resizeMode: 'contain' }}>
        </Image>
        <Image
          source={ require("../assets/settings.png") }
          style={{marginLeft: 30, marginBottom: 0, width: 100, height: 50, resizeMode: 'contain' }}>
        </Image>
    </View>

    <GroupClickable title="Create Poll" description={des} isGroup={false}></GroupClickable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window'). height,
    backgroundColor: '#1B1D21',
    alignItems: 'center',
    
  },
  header: {
    backgroundColor: '#7839a4', 
    width: Dimensions. get('window'). width, 
    alignItems: 'center', height: 100, 
    justifyContent: 'space-between', 
    flex: 0, flexDirection: 'row', 
    paddingTop:20
  }
});
