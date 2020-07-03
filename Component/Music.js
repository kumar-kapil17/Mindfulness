import React, { Component } from 'react';
import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native';

export default class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>

        <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}> Music </Text>

        <TouchableOpacity
         style={[styles.buttonContainer, styles.loginButton]}
         onPress={() => this.props.navigation.navigate('Main')}>
        <Text style={styles.loginText}>Get Started</Text>
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
       justifyContent:'center',
       alignContent:'center',
       alignItems:'center',
       alignSelf:'center',
       backgroundColor: '#1287A5',
      //  marginLeft: 95,
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