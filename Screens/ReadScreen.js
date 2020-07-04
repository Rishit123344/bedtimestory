import React from 'react'
import {Text,View,TextInput,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import db from '../config'

export default class ReadScreen extends React.Component{
    constructor(props){
super(props);
this.state={
allstories:[],
search:'',
lastReadStory:null
    }
}
searchStories=async(text)=>{
    var text = text.toUpperCase()
    var enteredText = text.split("")
    if(enteredText[0].toUpperCase()==='B'){
        const Stories = await db.collection("Stories").where("Author",'==',text).get()
        Stories.docs.map((doc)=>{
            this.setState({
               allstories:[...this.state.allstories,doc.data()],
                lastReadStory:doc
            })
        })
    }
        if(enteredText[0].toUpperCase()==='S'){
            const Stories = await db.collection("Stories").where("Title",'==',text).get()
            stories.docs.map((doc)=>{
                this.setState({
                    allstories:[...this.state.allstories,doc.data()],
                    lastReadStory:doc
                })
            })
        }
        }
        fetchMoreStories=async()=>{
            var text = this.state.search.toUpperCase();
            var enteredText = text.split("")
            if(enteredText[0].toUpperCase()==='B'){
                const Stories = await db.collection("Stories").where("Author",'==',text).startAfter(this.state.lastReadStory).limit(8).get()
                Stories.docs.map((doc)=>{
                    this.setState({
                        allstories:[...this.state.allstories,doc.data()],
                        lastReadStory:doc
                    })
                })
            }
                if(enteredText[0].toUpperCase()==='S'){
                    const Stories = await db.collection("Stories").where("Title",'==',text).startAfter(this.state.lastReadStory).limit(8).get()
                    Stories.docs.map((doc)=>{
                        this.setState({
                           allstories:[...this.state.allstories,doc.data()],
                            lastReadStory:doc
                        })
                    })
                }
                }
                componentDidMount=async()=>{
                    const query = await db.collection("Stories").limit(10).get(
                        query.docs.map((doc)=>{
                            this.setState({
                               allstories:[],
                               lastReadStory:doc
                            })
                        })
                    )
                }
                render(){
                    return(
                    <View style={styles.container}>
                    <View style={styles.searchbar}>
                        <TextInput style={styles.bar}placeholder="Author"onChangeText={(text)=>{this.setState({
                            search:story
                                    })}}></TextInput>
                        <TouchableOpacity style={styles.searchbutton}onPress={()=>{
                            this.searchStories(this.state.search)
                        }}>
                            <Text>Search</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList data={this.state.allstories}
                    renderItem={({item})=>(
                    <View style={{borderBottomWidth:2}}>
                    <Text>{'Author:'+item.author}</Text>
                    <Text>{'Title:'+item.title}</Text>
                    <Text>{'Story:'+item.stories}</Text>
                    <Text>{'date:'+item.date.toDate()}</Text>
                    </View>
                    )} keyExtractor={(item,index)=>index.toString()} onEndReached={this.fetchMoreStories} onEndReachedThreshold={0.7}>
                        
                    </FlatList>
                    </View>
                    );
                        }
                    }
                    const styles = StyleSheet.create({
                        container:{
                            flex:1,
                            marginTop:20
                        },
                        searchbar:{
                    flexDirection:'row',
                    height:40,
                    width:'auto',
                    borderWidth:0.5,
                    alignItems:'center',
                    backgroundColor:'gray'
                        },
                        bar:{
                    borderWidth:2,
                    height:30,
                    width:300,
                    paddingLeft:10
                        },
                        searchbutton:{
                            borderWidth:1,
                            height:30,
                            width:50,
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:'green'
                        }
                    })