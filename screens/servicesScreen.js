import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Modal } from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import GroupClickable from '../GroupClickable'
import { createPoll } from '../server/controllers/pollCtrl';

export default function servicesScreen() {
  const [showPollModal, setShowPollModal] = useState(false);
  const [question, setQuestion] = useState('Testing');
  const [groupId, setGroupId] = useState('testing');

  const des = "Create a poll/vote to decide something for your group"

  useEffect(() => {
    console.log("Get the group id of the user creating the poll");
    // setGroupId(group_id);
  }, [])

  function createPoll() {
    var data = "question=" + encodeURIComponent(question);
    data += "&group_id=" + encodeURIComponent(groupId);
    return fetch('http://192.168.86.42:3030/auth/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    }).then(res => {
      if (res.status === 200) {
        setShowPollModal(false);
      } else {
        alert("Something went wrong")
      }
    }).catch(err => {
      console.log(err);
    });
  }

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

    <TouchableOpacity onPress={() => setShowPollModal(true)}>
      <GroupClickable title="Create Poll" description={des} isGroup={false}></GroupClickable>
    </TouchableOpacity>

    {showPollModal && 
        <Modal
          animationType="slide"
          transparent={true}
          visible={showPollModal}
          onRequestClose={() => setShowPollModal(false)}
          avoidKeyboard={true}
          style={styles.modal}
        >
          <View style={styles.modalBody}>
            <TouchableOpacity onPress={() => createPoll()}>
              <Text>CLick me to create poll</Text>
            </TouchableOpacity>
          </View>
    </Modal>
    }
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
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBody: {
    alignSelf: 'center',
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    marginTop: '50%',
    flex: 0.75,
    width: 350,
},
});
