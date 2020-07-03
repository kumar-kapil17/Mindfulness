import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity,StyleSheet, } from 'react-native';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
           <Image
              source={require('../Component/Image/logo.jpg')}
              style={{height: 150, width: 150,marginTop:30}}
            />
        </View>
        <Text style={{fontSize:35,textAlign:'center',marginTop:10}}>Mindfulness</Text>
        <Text style={{fontSize:15,textAlign:'center',}}>Healthy mind,Healthy life</Text>
        <Text style={{fontSize:15,textAlign:'center',marginTop:15,letterSpacing:.5}}>Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, and not overly reactive or overwhelmed by what’s going on around us.</Text>
       
        <TouchableOpacity
         style={[styles.buttonContainer, styles.loginButton]}
         onPress={() => this.props.navigation.navigate('SignIn')}>
        <Text style={styles.loginText}>Get Started</Text>
        </TouchableOpacity>

        <Text style={{fontSize:15,marginTop:60,marginLeft:70}}>Already have an account?</Text>
        
        {/* <TouchableOpacity><View><Text style={{textAlign:'center',color:'#1287A5',marginLeft:240,marginTop:-20}}> Sign In</Text></View></TouchableOpacity> */}


        <TouchableOpacity
         onPress={() => this.props.navigation.navigate('SignIn')}>
        <Text style={{color:'#1287A5',marginLeft:240,marginTop:-20}}> Sign In</Text>
        </TouchableOpacity>

      </View>
    );
  }
}



const styles = StyleSheet.create({
     container: {
         flex:1,
     },
     buttonContainer: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom:30,
        width: 160,
      },
      loginButton: {
        backgroundColor: '#1287A5',
        marginLeft: 95,
        marginTop: 40,
      //   marginBottom:30,
        borderRadius: 15,
        // opacity: 1,
      },
      loginText: {
        color: 'white',
        fontSize: 15,
        fontFamily:'fantasy',
        textAlign:'center',
     
      },
});