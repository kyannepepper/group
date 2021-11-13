import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCogs, faGamepad, faPenSquare, faTimes, faUsers } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import groupsScreen from './screens/groupsScreen';
import servicesScreen from './screens/servicesScreen';
import SignUp from './SignUp';
import Login from './Login';
import CreateEvent from './CreateEvent';
import chatScreen from './screens/chatScreen';
const Tab = createBottomTabNavigator();


export default function App() {
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  return (
    <>
    {isLoggedIn ? 

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              let iconName;
              if (route.name === 'Group') {
                iconName = faUsers;
              } else if (route.name === 'Chat') {
                iconName = faUsers;
              } else if (route.name === 'Services') {
                iconName = faPenSquare;
              } else if (route.name === 'Games') {
                iconName = fa;
              } else if (route.name === 'Create an Event') {
                iconName = faUsers;
              }
              return <FontAwesomeIcon icon={iconName} color={focused ? '#22d3ad' : 'lightgray'} size={40} className='modal-close-button-top'/>
            },
          })}
          tabBarOptions={{
            activeTintColor: '#22d3ad',
            inactiveTintColor: 'lightgray',
            activeBackgroundColor: '#7839a4',
            inactiveBackgroundColor: '#7839a4',
            style: {height: 80, paddingBottom: 10, backgroundColor: '#7839a4', marginTop: -5,}

          }}
          
        >
          <Tab.Screen name="Chat" component={chatScreen} />
          <Tab.Screen name="Group" component={groupsScreen} />
          <Tab.Screen name="Services" component={servicesScreen} />
          <Tab.Screen name="Create an Event" component={CreateEvent} />
          
        </Tab.Navigator>
      </NavigationContainer>
      : 
      isSigningUp ? 
          isLoggingIn ?
          <Login setIsLoggedIn={setIsLoggedIn} setIsLoggingIn={setIsLoggingIn}/>
        :
          <SignUp setIsLoggedIn={setIsLoggedIn} setIsLoggingIn={setIsLoggingIn} />
        :
      <View style={styles.container}>
      <Image
        source={ require("./assets/logo.png") }
        style={{margin: 30, width: 100, height: 50, resizeMode: 'contain' }}>
      </Image>
          <View style={styles.haveaccount}>
            <ImageBackground resizeMode="cover"
              source={ require("./assets/people.png") }
              style={styles.background}
            >
                <TouchableHighlight onPress={() => setIsSigningUp(true)}
                  style={{
                    justifyContent: "center",
                    width: 300,
                    height: 50,
                    alignItems: "center",
                    backgroundColor: "#7839a4",
                    borderRadius: 5,
                  }}
                >
                  <Text style={{color: 'white'}}>Get Started</Text>
                </TouchableHighlight>
                <View style={{flex: 1, flexDirection: 'row', width: Dimensions. get('window'). width, alignItems: 'center', justifyContent: 'center',}}><Text style={styles.blue}>Already Have an account?</Text><TouchableHighlight onPress={()=>{}}><Text style={styles.blue}>Login Here</Text></TouchableHighlight></View> 
            </ImageBackground>
          </View>
        </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window'). height,
    backgroundColor: '#1B1D21',
    justifyContent: 'space-between',
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
    color: '#1B1D21',
    textAlign: "center",
    margin: 3,
  },
  background: {
    width: Dimensions.get('window').width, 
    height: 500, 
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    paddingTop: 375,
    justifyContent: 'center'
  }

});
