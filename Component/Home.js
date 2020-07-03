import React, { Component } from 'react';
import { View, Text, ScrollView,Image,ImageBackground, SafeAreaView,TouchableOpacity,Alert} from 'react-native';
import CarouselMan from './CarouselMan';
import Splash from './Splash'

// import {Icon} from 'react-native-elements';
export default class Home extends Component {

  static navigationOptions = {
    headerShown: false
}

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  // performTimeConsumingTask = async() => {
  //   return new Promise((resolve) =>
  //     setTimeout(
  //       () => { resolve('result') },
  //       2000
  //     )
  //   );
  // }

  // async componentDidMount() {
  //   // Preload data from an external API
  //   // Preload data using AsyncStorage
  //   const data = await this.performTimeConsumingTask();

  //   if (data !== null) {
  //     this.setState({ isLoading: false });
  //   }
  // }

  render() {
    // if (this.state.isLoading) {
    //   return <Splash />;
    // }
    return (
     
      <View style={{flex:1}}>

      <View style={{height:55,width:'100%',backgroundColor:'#01CBC6',justifyContent:'center',alignItems:'center',alignContent:'center'}}>
      <Text style={{marginTop:-3,textAlign:'center',color:'white',fontSize:25}}>MindfulnessApp</Text>
     </View>
    
     <ScrollView 
     showsVerticalScrollIndicator={false}>

    
     <View style={{height:180,width:'100%',}}>

      <CarouselMan/>

     {/* <ScrollView 
       horizontal = {true}> 

        <TouchableOpacity style={{height:180,width:'25%',}}
         onPress = {() => Alert.alert('Alert Title') }>

          <ImageBackground  source={require('../Component/Image/first2.jpg')} style={{width: '100%', height: '100%', resizeMode: 'contain',}}>
            <Text style={{fontWeight:'bold',fontSize:25,letterSpacing:-0.8,color:'white',textAlign:'center',marginTop:70}}>WAYS TO STOP FEELING GUILTY</Text>
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,color:'white',textAlign:'center',marginTop:40}}>LATEST VIDEOS</Text>
           
            <View style ={{marginLeft:140,marginTop:-20}}>
            <Image
              source={require('../Component/Image/play.png')}
              style={{height: 20, width: 20,marginLeft:105,tintColor:'black'}}
            />
            </View>
         
         </ImageBackground>
         
         </TouchableOpacity>

          

            <TouchableOpacity style={{height:180,width:'25%',marginLeft:2}}
              onPress = {() => Alert.alert('Alert Title') }>

            <ImageBackground  source={require('../Component/Image/first3.jpeg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
              <Text style={{fontWeight:'bold',fontSize:25,letterSpacing:1.5,color:'white',textAlign:'center',marginTop:50}}>MINDFULNESS TRICKS TO CONCENTRATION</Text>
              <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,color:'white',textAlign:'center',marginTop:40}}>LATEST VIDEOS</Text>
           
           <View style ={{marginLeft:140,marginTop:-20}}>
           <Image
             source={require('../Component/Image/play.png')}
             style={{height: 20, width: 20,marginLeft:105,tintColor:'black'}}
           />

           </View>
           </ImageBackground>

            </TouchableOpacity>


            <TouchableOpacity style={{height:180,width:'25%',marginLeft:2}}
              onPress = {() => Alert.alert('Alert Title') }>

            <ImageBackground  source={require('../Component/Image/first4.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
              <Text style={{fontWeight:'bold',fontSize:25,letterSpacing:1.5,color:'white',textAlign:'center',marginTop:70}}>MORNING ROUTINE</Text>
            
              <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,color:'white',textAlign:'center',marginTop:40}}>LATEST VIDEOS</Text>
           
           <View style ={{marginLeft:140,marginTop:-20}}>
           <Image
             source={require('../Component/Image/play.png')}
             style={{height: 20, width: 20,marginLeft:105,tintColor:'black'}}
           />
           </View>
            </ImageBackground>

            </TouchableOpacity>

            <TouchableOpacity style={{height:180,width:'25%',marginLeft:2}}
            onPress = {() => Alert.alert('Alert Title') }>

            <ImageBackground  source={require('../Component/Image/first5.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
              <Text style={{fontWeight:'bold',fontSize:25,letterSpacing:1.5,color:'white',textAlign:'center',marginTop:70}}>MINDFULNESS BREATHING</Text>
            
              <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,color:'white',textAlign:'center',marginTop:40}}>LATEST VIDEOS</Text>
           
           <View style ={{marginLeft:140,marginTop:-20}}>
           <Image
             source={require('../Component/Image/play.png')}
             style={{height: 20, width: 20,marginLeft:105,tintColor:'black'}}
           />
           </View>
            </ImageBackground>

            </TouchableOpacity>


            </ScrollView> */}

        </View>
     


        <View  style={{flexDirection:'row',height:150,width:'100%',marginTop:3}}>
          
           <View  style={{height:147,width:'50%',}}>

           <ImageBackground  source={require('../Component/Image/nature.jpeg')} style={{width: '100%', height: '100%', resizeMode: 'contain',}}>
            <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:.5,color:'white',textAlign:'center',marginTop:40}}>MEDITATE WITH NATURE</Text>
         </ImageBackground>
              
           </View>

           <View  style={{height:147,width:'50%',marginLeft:2}}>
              
                <ImageBackground  source={require('../Component/Image/4.jpeg')} style={{width: '100%', height: '100%', resizeMode: 'contain',}}>
                    <Text style={{fontWeight:'bold',fontSize:25,letterSpacing:1.5,color:'white',textAlign:'center',marginTop:40}}>SLEEP AND RELAX</Text>
                </ImageBackground>

           </View>

      </View>


      <View style={{height:150,width:'100%',}}>
            
         <ImageBackground  source={require('../Component/Image/5.1.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
            <Text style={{fontWeight:'bold',fontSize:25,letterSpacing:1.5,color:'white',textAlign:'center',marginTop:60}}>BEING PRESENT</Text>
         </ImageBackground>
      </View>





     
      <View  style={{flexDirection:'row',height:150,width:'100%',marginTop:3}}>
      <ScrollView 
         horizontal={true}
         showsHorizontalScrollIndicator={false}
          >  

           <TouchableOpacity  style={{height:150,width:'25%',}}
              onPress={() => this.props.navigation.navigate('YoutubeVideo')}>
                <ImageBackground  source={require('../Component/Image/6.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
                    <Text style={{fontWeight:'bold',fontSize:25,letterSpacing:1.5,color:'white',textAlign:'center',marginTop:40}}>POSITIVE ENERGY</Text>
                    <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,color:'white',textAlign:'center',marginTop:40}}>LATEST VIDEOS</Text>
           
                    <View style ={{marginLeft:90,marginTop:-20}}>
                    <Image
                      source={require('../Component/Image/play.png')}
                      style={{height: 20, width: 20,marginLeft:105,tintColor:'white'}}
                    />
                    </View>
                </ImageBackground>
           </TouchableOpacity>
  

           <TouchableOpacity  style={{height:150,width:'25%',marginLeft:2}}
             onPress = {() => Alert.alert('Alert Title') }>

                <ImageBackground  source={require('../Component/Image/7.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
                    <Text style={{fontWeight:'bold',fontSize:25,letterSpacing:.5,color:'white',textAlign:'center',marginTop:40}}>MEDITATION FOR SUCCESS</Text>
                    <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,color:'white',textAlign:'center',marginTop:10}}>LATEST VIDEOS</Text>
           
                    <View style ={{marginLeft:90,marginTop:-20}}>
                    <Image
                      source={require('../Component/Image/play.png')}
                      style={{height: 20, width: 20,marginLeft:105,tintColor:'white'}}
                    />
                    </View>
                </ImageBackground>
           
           </TouchableOpacity>


           <TouchableOpacity  style={{height:150,width:'25%',marginLeft:2}}
             onPress = {() => Alert.alert('Alert Title') }>

                <ImageBackground  source={require('../Component/Image/19.jpeg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
                    <Text style={{fontWeight:'bold',fontSize:25,letterSpacing:.5,color:'white',textAlign:'center',marginTop:40}}>DEVELOPES GRATITUDE</Text>
                    <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,color:'white',textAlign:'center',marginTop:10}}>LATEST VIDEOS</Text>
           
                    <View style ={{marginLeft:90,marginTop:-20}}>
                    <Image
                      source={require('../Component/Image/play.png')}
                      style={{height: 20, width: 20,marginLeft:105,tintColor:'white'}}
                    />
                    </View>
                </ImageBackground>
           
           </TouchableOpacity>


           <TouchableOpacity  style={{height:150,width:'25%',marginLeft:2}}
             onPress = {() => Alert.alert('Alert Title') }>

                <ImageBackground  source={require('../Component/Image/18.jpeg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
                    <Text style={{fontWeight:'bold',fontSize:25,letterSpacing:.5,color:'white',textAlign:'center',marginTop:40}}>MOTIVATE MIND</Text>
                    <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,color:'white',textAlign:'center',marginTop:40}}>LATEST VIDEOS</Text>
           
                    <View style ={{marginLeft:90,marginTop:-20}}>
                    <Image
                      source={require('../Component/Image/play.png')}
                      style={{height: 20, width: 20,marginLeft:105,tintColor:'white'}}
                    />
                    </View>
                </ImageBackground>

          </TouchableOpacity>

      </ScrollView>
      </View>
      



      <View style={{height:150,width:'100%',marginTop:3}}>
         <ImageBackground  source={require('../Component/Image/8.5.jpeg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:5,color:'white',textAlign:'center',marginTop:40}}>MINDFULNESS MEDITATION </Text>
         </ImageBackground>
      </View>


      <View  style={{flexDirection:'row',height:150,width:'100%',marginTop:3}}>
          
          <View  style={{height:147,width:'50%',}}>

          <ImageBackground  source={require('../Component/Image/9.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:2,color:'white',textAlign:'center',marginTop:40}}>IMPROVE FOCUS </Text>
         </ImageBackground>

         </View>


          <View  style={{height:147,width:'50%',marginLeft:2}}>

          <ImageBackground  source={require('../Component/Image/11.webp')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:2,color:'white',textAlign:'center',marginTop:40}}>STRESS RELIEF </Text>
         </ImageBackground>
           
          </View>

     </View>

 
     <View style={{height:150,width:'100%',}}>

         <ImageBackground  source={require('../Component/Image/12.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:5,color:'white',textAlign:'center',marginTop:60}}>MENTAL HEALTH </Text>
         </ImageBackground>
          
      </View>


      <View  style={{flexDirection:'row',height:150,width:'100%',marginTop:3}}>
          
          <View  style={{height:147,width:'50%',}}>

          <ImageBackground  source={require('../Component/Image/13.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:2,color:'white',textAlign:'center',marginTop:40}}>MORNING MEDITATION </Text>
         </ImageBackground>

         </View>


          <View  style={{height:147,width:'50%',marginLeft:2}}>

          <ImageBackground  source={require('../Component/Image/13.1.png')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
             <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:2,color:'white',textAlign:'center',marginTop:40}}>BREATHING MEDITATION </Text>
         </ImageBackground>
           
          </View>

     </View>

     <View style={{height:150,width:'100%',}}>

        <ImageBackground  source={require('../Component/Image/15.1.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
            <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:2,color:'white',textAlign:'center',marginTop:60}}>INCREASE HAPPINESS </Text>
        </ImageBackground>
        
     </View>

     </ScrollView>
 
      </View>
   
    );
  }
}


