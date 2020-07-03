

//Use Me//

import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';
import Favorites from './Component/Favorites';
import Library from './Component/Library';
import Music from './Component/Music';
import Home from './Component/Home';
import Main from './Component/Main';
import Login from './Component/Login';
import SignIn from './Component/SignIn';
import YoutubeVideo from './Component/YoutubeVideo';
import YoutubeVideo1 from './Component/YoutubeVideo1';
import Breathing from './Component/Breathing';
import Splash from './Component/Splash';

// const Maine = createStackNavigator({
//   Main: {
//     screen: Main,
//   },
//   Login: {
//     screen: Login,
//   },
//   SignIn: {
//     screen: SignIn,
//   },

//   TabNav : {
//      screen: Home,
//   },
//   Favorites:{

//     screen:Favorites,
//   },

//   Library:{

//     screen:Library,
//   },
//   Music:{

//     screen: Music,
//   },
// });


export default class App extends Component {
  constructor(props) {
        super(props);
    
        this.state = { isLoading: true }
      }
    
      performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            5000
          )
        );
      }
    
      async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
    
        if (data !== null) {
          this.setState({ isLoading: false });
        }
      }
    
  render() {
    if (this.state.isLoading) {
         return <Splash />;
         }
    return (
      // <View style={{flex:1, backgroundColor:'#0A79DF'}}>
      //   { this.state.isLoading ? '' :  <View style={{justifyContent:'center',alignItems:'center',marginTop:150}}>
      //   <Image
      //       source={require('./Component/Image/spl.png')}
      //       style={{height: 200, width: 170,}}
      //       />
      //     </View>}
       <MyApp/>
      //  </View>
    
    );
  }
}




// const App = createSwitchNavigator({
//   Splash: {
//    screen : Splash,
//   },
//   // TabNav : {
//   //   screen : Home,
//   // }

// });





const AuthStack = createStackNavigator({

  YoutubeVideo : {

    screen : YoutubeVideo,
  }

});

const HomeStack = createStackNavigator({
  Library: {
    screen: Home,
    // navigationOptions: {
    //   headerTitle: 'Feed',
    // },

  },
  YoutubeVideo : {
    screen : YoutubeVideo,
  }
});


const LibraryStack = createStackNavigator({
  Library: {
    screen: Library,
    // navigationOptions: {
    //   headerTitle: 'Feed',
    // },

  },
  Breathing : {
    screen : Breathing,
  },
  YoutubeVideo : {
    screen : YoutubeVideo,
  },
  YoutubeVideo1 : {
    screen : YoutubeVideo1,
  }
});


const TabNav = createBottomTabNavigator(
  {
     Home:{
         screen:HomeStack,
         navigationOptions:{
         tabBarLabel:'Home',
         activeColor:'#ff0000',
         inactiveColor:'#000000',
         barStyle:{backgroundColor: '#01CBC6'},
         tabBarIcon:()=>(
           <View>
             <Icon name={'home'} size={25} style={{color:'#ff0000'}} />
           </View>
         )
       }
     },
     Favorites:{

        screen:Favorites,
        navigationOptions:{
        tabBarLabel:'Favorites',
        activeColor:'#ff0000',
        inactiveColor:'#000000',
        barStyle:{backgroundColor: '#01CBC6'},
        tabBarIcon:()=>(
          <View>
            <Icon name={'favorite'} size={25} style={{color:'#ff0000'}} />
          </View>
        )
      }
     },
    Library:{

        screen:LibraryStack,
        navigationOptions:{
        tabBarLabel:'Library',
        activeColor:'#ff0000',
        inactiveColor:'#000000',
        barStyle:{backgroundColor: '#01CBC6'},
        tabBarIcon:()=>(
          <View>
            <Icon name={'video-library'} size={25} style={{color:'#ff0000'}} />
          </View>
        )
      }
    },
     Music:{
        screen : Music, 
      // screen: Maine,
        navigationOptions:{
        tabBarLabel:' Music',
        activeColor:'#ff0000',
        inactiveColor:'#000000',
        barStyle:{backgroundColor: '#01CBC6'},
        tabBarIcon:()=>(
          <View>
            <Icon name={'audiotrack'} size={25} style={{color:'#ff0000'}} />
          </View>
        )
      }
    },
    
  
   
  }
);
  
   console.disableYellowBox = true;
   const MyApp = createAppContainer(TabNav);

















