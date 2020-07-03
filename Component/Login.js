import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,TextInput, KeyboardAvoidingView, ScrollView
 } from 'react-native';
import Email from './Email';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView>
          <ScrollView>
          <View style={{height:180,width:360,backgroundColor:'#BB2CD9',}}>
         <Text style={{fontSize:25,color:'white',textAlign:'center',marginTop:60,fontFamily:'fantasy'}}>Welcome to Login</Text>    
         </View>
          <View style={{paddingTop:20}}>
           <TextInput
              maxLength= {10}
              keyboardType={'name-phone-pad'}
              textStyle={{color: 'white'}}
              placeholder="First name"
              underlineColorAndroid="transparent"
              style={styles.inputs}>
           </TextInput>

           <TextInput
              maxLength= {10}
              keyboardType={'name-phone-pad'}
              textStyle={{color: 'white'}}
              placeholder="Last name"
              underlineColorAndroid="transparent"
              style={styles.inputs}>
           </TextInput>

           <Email/>


           <TextInput
              maxLength= {12}
              keyboardType={'name-phone-pad'}
              textStyle={{color: 'white'}}
              placeholder="Password"
              underlineColorAndroid="transparent"
              style={styles.inputs}>
           </TextInput>
         </View>
         <TouchableOpacity
              style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => this.props.navigation.navigate('Home')}
            >
              <Text style={styles.loginText}>Create account</Text>
            </TouchableOpacity>
          </ScrollView>
      </KeyboardAvoidingView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#89C4F4',
    //  opacity:0.5,
    },
  
    inputs: {
      height: 45,
      marginLeft: 16,
      paddingLeft: 25,
      borderRadius: 30,
      borderBottomWidth: 0.5,
      // tintColor: 'grey',
      borderBottomColor: '#2C3335',
    },
  
    buttonContainer: {
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // marginBottom:30,
      width: 300,
    },
    loginButton: {
      // flex:2,
      backgroundColor: '#BB2CD9',
      marginLeft: 35,
      marginTop: 100,
    //   marginBottom:30,
      borderRadius: 15,
      // opacity: 0.8,
    },
    loginText: {
      color: 'white',
      fontSize: 20,
      fontFamily:'fantasy',
      textAlign:'center',
    },
  });
  