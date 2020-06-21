import React from 'react'
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native'

export default class WriteScreen extends React.Component{
    constructor(){
        super();
        this.state={
displayText:''

        }
    }
    render() {
        return (
          <View style={styles.container}>
          <TextInput onChangeText={(text)=>{this.setState({
            text:text
          })}} value={this.state.text} style={styles.inputbox}multiline numberOfLines={100000000000000}/>
          <TouchableOpacity style={styles.goButton}onPress={()=>{
            this.setState({
              displayText:this.state.text
            })
          }}><Text style={styles.buttontext}>Go</Text></TouchableOpacity>
          <Text style={styles.displayText}>{this.state.displayText}</Text>
          </View>
         
        );
      }
    }
    const styles = StyleSheet.create({
        inputbox: {
          marginTop: 100,
          width: 300,
          alignSelf: 'center',
          height: 40,
          textAlign: 'center',
          borderWidth: 4,
        },
        goButton: {
          width: '-50%',
          height: 55,
          alignSelf: 'center',
          padding: 10,
          margin: 10,
        },
        buttontext: {
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold'
        },
        displayText: {
          textAlign: 'center',
          fontSize: 30,
        },
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }
        });
       