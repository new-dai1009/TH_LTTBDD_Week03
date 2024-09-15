import React from "react";
import { Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View, Text} from "react-native";
import {Ionicons} from '@expo/vector-icons'




export default Screen_XMEye = () =>{


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.imgContainer}>
            <Image 
            style={styles.img}
            source={require('../img/eyeball.jpg')}/>
            </View>
            <View style={styles.inputTextContainer}>
                <View style={{flexDirection:'row',marginTop:40, borderBottomColor:'black', borderBottomWidth:1}}>
                <Ionicons style={{marginBottom:10}} name="person-outline" size={30} color={'blue'}/>
                <TextInput
                    style={styles.inputText}
                    placeholder="Plesae input user name ..."
                    
                ></TextInput>
                </View>
                <View style={{flexDirection:'row',marginTop:40}}>
                <Ionicons style={{marginBottom:10}} name="lock-closed-outline" size={30} color={'blue'}/>
                <TextInput
                    style={styles.inputText}
                    placeholder="Plesae input password ..."
                ></TextInput>
                </View>
            </View>
            <TouchableOpacity
                style={{
                    width:'80%',
                    height:40,
                    borderRadius:10,
                    backgroundColor:'blue',
                    alignItems:'center',
                    justifyContent:'center',
                    color:'white',
                    fontSize:20, 
                    marginTop:50
                    }}
                >
                        LOGIN
                </TouchableOpacity>
                <View style={{flexDirection:'row', width:'80%', justifyContent:'space-between', marginTop:10, fontSize:20}}>
                    <Text>Register</Text>
                    <Text>Forgot Password</Text>
                </View>
                <View style={{width:'80%', flexDirection:'row', justifyContent:'space-between', marginTop:30}}>
                    <View style={styles.line}></View>
                    <Text style={{fontSize:16}}>Orther Login Methods</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.icontact}>
                    <Ionicons style={{backgroundColor:'#3AB4FF'}} name="person-add" size={50} color={'white'}/>
                    <Ionicons style={{backgroundColor:'#F4AA47'}} name="wifi-sharp" size={50} color={'white'}/>
                    <Ionicons style={{backgroundColor:'#3A579C'}} name="logo-facebook" size={50} color={'white'}/>

                </View>
        </SafeAreaView>
    );



};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputTextContainer:{
        width:'80%', 
        borderBottomWidth:1,
        borderBottomColor:'black',
        marginHorizontal:30, 
        justifyContent:'space-between', 

    },
     inputText:{
        paddingLeft:30,
        width:'100%', 
        fontSize:16, 
        borderwith:0,
        borderStyle:'dashed',
        fontWeight:'light',
        placeholderTextColor:'#aaa',

     },
     line:{
        width:'20%',
        height:15,
        borderBottomColor:'black',
        borderBottomWidth:2
        // backgroundColor:'blue'
        
     },
     icontact:{
        flexDirection:'row',
        width:'80%',
        justifyContent:'space-between',
        marginTop:40
     }

});