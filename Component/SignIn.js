import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import Email from './Email';
import { ScrollView } from 'react-native-gesture-handler';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView>
      <ScrollView>
        <View style={{height: 180, width: 360, backgroundColor: '#BB2CD9'}}>
          <Text
            style={{
              fontSize: 25,
              color: 'white',
              textAlign: 'center',
              marginTop: 60,
              fontFamily: 'fantasy',
            }}>
            Welcome back!
          </Text>
        </View>

        <View style={{marginTop:10}}>
          <Email />

          <TextInput
            maxLength={12}
            keyboardType={'name-phone-pad'}
            textStyle={{color: 'white'}}
            placeholder="Password"
            underlineColorAndroid="transparent"
            style={styles.inputs}></TextInput>
        </View>

        {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, textAlign: 'center', marginTop: 30}}>
            or
          </Text>
        </View> */}

       <View style={{marginTop:30,marginLeft:35}}>
        <View style={styles.hairline} />
        </View>
        <Text style={styles.loginButtonBelowText1}>or</Text>
        <View style={{marginLeft:220,marginTop:-10}}>
        <View style={styles.hairline} />
        </View>
        
        <View>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}>
            <Image
              source={require('../Component/Image/facebook.png')}
              style={{height: 30, width: 30, left: -10}}
            />
            <Text style={styles.loginText}>Sign in with Facebook</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
              marginLeft: 35,
              borderRadius: 15,
              backgroundColor: '#BB2CD9',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: 300,
              top: 20,
            }}>
            <Image
              source={require('../Component/Image/google.png')}
              style={{height: 30, width: 30, left: -20}}
            />

            <Text style={styles.loginText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View> 
          <View style={{marginTop:20}}>
            <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.loginText}>SignIn</Text>
            </TouchableOpacity>
            </View>
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
    marginTop: 40,
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
  hairline: {
    backgroundColor: '#A2A2A2',
    height: 1,
    // lineHeight:2,
    width: 120,
    // margin:20,
    // marginLeft:10,
  },
  
  loginButtonBelowText1: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 18,
    // paddingHorizontal: 5,
    marginLeft:9,
    alignSelf: 'center',
    color: '#A2A2A2',
    marginTop:-15,
  },
});
