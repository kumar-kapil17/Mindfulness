import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ImageBackground
} from 'react-native';

import Shimmer from 'react-native-shimmer';
// import logoSource from './react-logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#a4508b'
// background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);

  },
  title: {
    fontSize: 32,
    fontWeight: '300',
    marginBottom: 20,
    color:'white',
    marginTop:80,
    margin:50
  },
  loading: {
    marginVertical: 10,
    marginTop:520
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '500',
    color:'white',
    
    // marginBottom:10
  },
  reactLogo: {
    width: 150,
    height: 150,
  },
});

export default function Example(props) {
  return (
    <View style={styles.container}>
        {/* <ImageBackground source={require('../Component/Image/full1.jpg')} style={{width: '100%', height: '100%'}}>
        <Text style={styles.title}>Shimmer Example</Text> */}
      <View>
      <Shimmer style={styles.loading} duration={2000}>
        <Text style={styles.loadingText}>MindfulnessApp</Text>
      </Shimmer>
      {/* <Shimmer direction="down">
        <Image source={logoSource} style={styles.reactLogo} />
      </Shimmer> */}
      </View>
        {/* </ImageBackground> */}
      
    </View>
  );
}