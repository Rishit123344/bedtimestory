import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadScreen from './Screens/ReadScreen';
import WriteScreen from './Screens/WriteScreen';
import LoginScreen from './Screens/LoginScreen'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';

export default class app extends React.Component {
 render(){
   return(
<AppContainer></AppContainer>
   );
 }
}
const TabNavigator = createBottomTabNavigator({
  Read:{screen:ReadScreen},
  Write:{screen:WriteScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName
      if(routeName === 'Read'){
        return(
          <Image source = {require('./assets/leather-book-preview.png')} style={{width:40,height:40}}/>
        )
      }
      else  if(routeName === 'Write'){
        return(
          <Image source = {require('./assets/th.jpg')} style={{width:40,height:40}}/>
        )
      }
    }
  })
})
const SwitchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
})
const AppContainer = createAppContainer(SwitchNavigator)


  


