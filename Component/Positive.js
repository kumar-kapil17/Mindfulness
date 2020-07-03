import React, { Component } from 'react';
import { View, Text,ImageBackground,TouchableOpacity,Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Positive extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white',justifyContent:'space-around',}}>
          {/* <View>
               <Text style={{fontSize:18,fontFamily:'fantasy',fontWeight:'bold',textAlign:'center',color:'#1287A5',marginTop:30}}>You Can play Any video</Text>
          </View> */}
       <View style={{borderColor:'black',height:'100%',width:'100%',marginTop:40}}>
       <ScrollView
        showsVerticalScrollIndicator={false}>
       
        <View style={{flexDirection:'row',height:200,width:'100%',margin:20,display:'flex',marginLeft:12.5}}>
         
         <TouchableOpacity style={{height:160,width:'45%'}}
         onPress = {() => Alert.alert('Alert Title','video will play after some time') }>
         <ImageBackground  source={require('../Component/Image/6.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:1,color:'white',textAlign:'center',marginTop:40}}>POSITIVE ENERGY </Text>
         </ImageBackground>
         </TouchableOpacity>

         <TouchableOpacity style={{height:160,width:'45%',marginHorizontal:10}}
         onPress = {() => Alert.alert('Alert Title','video will play after some time') }>
         <ImageBackground  source={require('../Component/Image/m.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%',shadowOpacity:1}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:1,color:'white',textAlign:'center',marginTop:40}}>MEDITATION FOR SUCCESS </Text>
         </ImageBackground>
         </TouchableOpacity>

        </View>


        <View style={{flexDirection:'row',height:200,width:'100%',margin:20,display:'flex',marginLeft:12.5,marginTop:-45}}>
         
         <TouchableOpacity style={{height:160,width:'45%'}}
         onPress = {() => Alert.alert('Alert Title','video will play after some time') }>
         <ImageBackground  source={require('../Component/Image/d.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:1,color:'white',textAlign:'center',marginTop:40}}>DEVELOPES GRATITUDE </Text>
         </ImageBackground>
         </TouchableOpacity>

         <TouchableOpacity style={{height:160,width:'45%',marginHorizontal:10}}
         onPress = {() => Alert.alert('Alert Title','video will play after some time') }>
         <ImageBackground  source={require('../Component/Image/mo.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:1,color:'white',textAlign:'center',marginTop:40}}>MOTIVATE MIND </Text>
         </ImageBackground>
         </TouchableOpacity>

        </View>


        <View style={{flexDirection:'row',height:200,width:'100%',margin:20,display:'flex',marginLeft:12.5,marginTop:-45}}>
         
         <TouchableOpacity style={{height:160,width:'45%'}}
         onPress = {() => Alert.alert('Alert Title','video will play after some time') }>
         <ImageBackground  source={require('../Component/Image/mm.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:1,color:'white',textAlign:'center',marginTop:40}}>MIND  FULNESS MEDITATION </Text>
         </ImageBackground>
         </TouchableOpacity>

         <TouchableOpacity style={{height:160,width:'45%',marginHorizontal:10}}
         onPress = {() => Alert.alert('Alert Title','video will play after some time') }>
         <ImageBackground  source={require('../Component/Image/ml.webp')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:1,color:'white',textAlign:'center',marginTop:40}}>MENTAL HEALTH </Text>
         </ImageBackground>
         </TouchableOpacity>

        </View>


        <View style={{flexDirection:'row',height:200,width:'100%',margin:20,display:'flex',marginLeft:12.5,marginTop:-45}}>
         
         <TouchableOpacity style={{height:160,width:'45%'}}
         onPress = {() => Alert.alert('Alert Title','video will play after some time') }>
         <ImageBackground  source={require('../Component/Image/9.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:1,color:'white',textAlign:'center',marginTop:40}}>IMPROVE FOCUS </Text>
         </ImageBackground>
         </TouchableOpacity>

         <TouchableOpacity style={{height:160,width:'45%',marginHorizontal:10}}
         onPress = {() => Alert.alert('Alert Title','video will play after some time') }>
         <ImageBackground  source={require('../Component/Image/11.webp')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:1,color:'white',textAlign:'center',marginTop:40}}>STRESS RELIEF </Text>
         </ImageBackground>
         </TouchableOpacity>

        </View>


        <View style={{flexDirection:'row',height:200,width:'100%',margin:20,display:'flex',marginLeft:12.5,marginTop:-45}}>
         
         <TouchableOpacity style={{height:160,width:'45%'}}
         onPress = {() => Alert.alert('Alert Title','video will play after some time') }>
         <ImageBackground  source={require('../Component/Image/mr.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:1,color:'white',textAlign:'center',marginTop:40}}>MORNING MEDITATION </Text>
         </ImageBackground>
         </TouchableOpacity>

         <TouchableOpacity style={{height:160,width:'45%',marginHorizontal:10}}
         onPress = {() => Alert.alert('Alert Title','video will play after some time') }>
         <ImageBackground  source={require('../Component/Image/bm.jpeg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:1,color:'white',textAlign:'center',marginTop:40}}>BREATHING MEDITATION </Text>
         </ImageBackground>
         </TouchableOpacity>

        </View>

    
    </ScrollView>
    </View>
      </View>
    );
  }
}
