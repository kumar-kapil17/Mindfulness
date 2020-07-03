import React, { Component } from "react";
import { Platform, StyleSheet, Text, View,name,Alert } from "react-native";
import Carousel from "./Carousel";

const images = [
   { name:'WAYS TO STOP FEELING GUILTY',image :require('../Component/Image/first2.jpg')} ,
   { name:'MINDFULNESS TRICKS TO CONCENTRATION',image:require('../Component/Image/first3.jpeg')},
   { name:'MORNING ROUTINE', image:  require('../Component/Image/first4.jpg')},
   { name:'MINDFULNESS BREATHING', image:require('../Component/Image/first5.jpg')},
   { name:'MINDFULNESS MEDITATION', image:require('../Component/Image/1.jpg')},
    
  
];


export default class CarouselMan extends Component {
  render() {
    return( 
    <View style={styles.container}>
        <Carousel images={images} />
         
   
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});