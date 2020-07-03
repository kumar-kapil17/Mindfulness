import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Library extends Component {
  static navigationOptions = {
    headerShown: false
}
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView
         showsVerticalScrollIndicator={false}>
           
        <Text style={{fontSize:22,fontWeight:'bold',textAlign:'center',top:15,fontFamily:'fantasy'}}> Library </Text>
        <Text style={{fontSize:12,fontWeight:'bold',textAlign:'center',color:'#1287A5',top:15,fontFamily:'fantasy'}}>Find the perfect meditation for your day </Text>
      
      <View style={{margin:'auto'}}>

      <TouchableOpacity style={{height:80,width:'90%',backgroundColor:'#0A79DF',margin:20,marginTop:40,borderRadius:7}}
       onPress={() => this.props.navigation.navigate('Breathing')}>
      <Text style={{fontSize:14,fontWeight:'bold',left:15,top:20,color:'white',fontFamily:'fantasy'}}> Breathing </Text>
      <Text style={{fontSize:10,fontWeight:'bold',left:15,top:25,color:'white',fontFamily:'fantasy'}}> 5 meditation </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{height:80,width:'90%',backgroundColor:'#EEC213',margin:20,marginTop:15,borderRadius:7}}
      onPress = {() => Alert.alert('Alert Title','It may be working after some time') }>
      <Text style={{fontSize:14,fontWeight:'bold',left:15,top:20,color:'white',fontFamily:'fantasy'}}> Stress </Text>
      <Text style={{fontSize:10,fontWeight:'bold',left:15,top:25,color:'white',fontFamily:'fantasy'}}> 10 meditation </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{height:80,width:'90%',backgroundColor:'#1BCA9B',margin:20,marginTop:15,borderRadius:7}}
      onPress = {() => Alert.alert('Alert Title','It may be working after some time') }>
      <Text style={{fontSize:14,fontWeight:'bold',left:15,top:20,color:'white',fontFamily:'fantasy'}}> Emotion </Text>
      <Text style={{fontSize:10,fontWeight:'bold',left:15,top:25,color:'white',fontFamily:'fantasy'}}> 10 meditation </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{height:80,width:'90%',backgroundColor:'#019031',margin:20,marginTop:15,borderRadius:7}}
      onPress = {() => Alert.alert('Alert Title','It may be working after some time') }>
      <Text style={{fontSize:14,fontWeight:'bold',left:15,top:20,color:'white',fontFamily:'fantasy'}}> Mindfulness </Text>
      <Text style={{fontSize:10,fontWeight:'bold',left:15,top:25,color:'white',fontFamily:'fantasy'}}> 12 meditation </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{height:80,width:'90%',backgroundColor:'#F15C2B',margin:20,marginTop:15,borderRadius:7}}
      onPress = {() => Alert.alert('Alert Title','It may be working after some time') }>
      <Text style={{fontSize:14,fontWeight:'bold',left:15,top:20,color:'white',fontFamily:'fantasy'}}> Focus </Text>
      <Text style={{fontSize:10,fontWeight:'bold',left:15,top:25,color:'white',fontFamily:'fantasy'}}> 6 meditation </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{height:80,width:'90%',backgroundColor:'#6B2C91',margin:20,marginTop:15,borderRadius:7}}
      onPress = {() => Alert.alert('Alert Title','It may be working after some time') }>
      <Text style={{fontSize:14,fontWeight:'bold',left:15,top:20,color:'white',fontFamily:'fantasy'}}> Sleep </Text>
      <Text style={{fontSize:10,fontWeight:'bold',left:15,top:25,color:'white',fontFamily:'fantasy'}}> 5 meditation </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{height:80,width:'90%',backgroundColor:'#A3CB37',margin:20,marginTop:15,borderRadius:7}}
      onPress = {() => Alert.alert('Alert Title','It may be working after some time') }>
      <Text style={{fontSize:14,fontWeight:'bold',left:15,top:20,color:'white',fontFamily:'fantasy'}}> Body </Text>
      <Text style={{fontSize:10,fontWeight:'bold',left:15,top:25,color:'white',fontFamily:'fantasy'}}> 5 meditation </Text>
      </TouchableOpacity>


      <TouchableOpacity style={{height:80,width:'90%',backgroundColor:'#2C3335',margin:20,marginTop:15,borderRadius:7}}
      onPress = {() => Alert.alert('Alert Title','It may be working after some time') }>
      <Text style={{fontSize:14,fontWeight:'bold',left:15,top:20,color:'white',fontFamily:'fantasy'}}> Rain </Text>
      <Text style={{fontSize:10,fontWeight:'bold',left:15,top:25,color:'white',fontFamily:'fantasy'}}> 5 meditation </Text>
      </TouchableOpacity>


      <TouchableOpacity style={{height:80,width:'90%',backgroundColor:'#2B2B52',margin:20,marginTop:15,borderRadius:7}}
      onPress = {() => Alert.alert('Alert Title','It may be working after some time') }>
      <Text style={{fontSize:14,fontWeight:'bold',left:15,top:20,color:'white',fontFamily:'fantasy'}}> Calm </Text>
      <Text style={{fontSize:10,fontWeight:'bold',left:15,top:25,color:'white',fontFamily:'fantasy'}}> 5 meditation </Text>
      </TouchableOpacity>


      <TouchableOpacity style={{height:80,width:'90%',backgroundColor:'#8B78E6',margin:20,marginTop:15,borderRadius:7}}
      onPress = {() => Alert.alert('Alert Title','It may be working after some time') }>
      <Text style={{fontSize:14,fontWeight:'bold',left:15,top:20,color:'white',fontFamily:'fantasy'}}> Self </Text>
      <Text style={{fontSize:10,fontWeight:'bold',left:15,top:25,color:'white',fontFamily:'fantasy'}}> 5 meditation </Text>
      </TouchableOpacity>

      </View>





      </ScrollView>
      </View>

    );
  }
}
