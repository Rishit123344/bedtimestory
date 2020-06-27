import React from 'react'
import {Text,View,StyleSheet,TextInput,TouchableOpacity,KeyboardAvoidingView, Alert} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class WriteScreen extends React.Component{
    constructor(){
        super();
        this.state={
story:'',
author:'',
title:''
        }
    }
    submitStory=async()=>{
      db.collection("Stories").add({
        'Author' : this.state.author,
        'Title' : this.state.title,
        'date' : firebase.firestore.Timestamp.now().toDate(),
        'Story' : this.state.story
      })
      this.setState({
        story:'',
author:'',
title:''
      })
      Alert.alert("You'r Story Has Been Submited")
    }
    render() {
       return(
        <KeyboardAvoidingView style={styles.container}>
            <View>
              <TextInput onChangeText={(text)=>{this.setState({
                author:text
              })}}value={this.state.author} style={styles.inputbox}placeholder='Enter Authors Name'/>
               <TextInput onChangeText={(text)=>{this.setState({
                title:text
              })}}value={this.state.title} style={styles.inputbox}placeholder='Name of the book'/>
          <TextInput onChangeText={(text)=>{this.setState({
            story:text
          })}} value={this.state.story} style={styles.inputbox}multiline numberOfLines={100000000000000}placeholder='Write a story here'/>
</View>
          <TouchableOpacity style={styles.goButton}onPress={async()=>{
            var userStory = await this.submitStory()
          }}><Text style={styles.buttontext}>Submit</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView>
         
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
        },
        inputbox:{
          marginTop: -100,
          width: 300,
          alignSelf: 'center',
          height: 40,
          textAlign: 'center',
          borderWidth: 4,
        },
        });
     