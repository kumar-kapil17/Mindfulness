// import React, {Component} from 'react';
// import {
//     StyleSheet,
//     View,
//     Text,
//     TouchableOpacity,
//     Linking,
//     Image,
// } from 'react-native'
// import SplashScreen from 'react-native-splash-screen'

// export default class Splash extends Component {

//     componentDidMount() {
//         SplashScreen.hide();
//     }


//     render() {
//         return (

//             <View style={{flex:1,backgroundColor:'#0A79DF',}}>
//             <View style={{justifyContent:'center',alignItems:'center',marginTop:150}}>
//                     <Image
//                         source={require('../Component/Image/spl.png')}
//                         style={{height: 200, width: 170,}}
//                         />
//             </View>
//             </View>

//             // <TouchableOpacity
//             //     style={styles.container}
//             //     onPress={(e)=> {
//             //         // Linking.openURL('http://www.devio.org/');
//             //     }}
//             // >
//             //   <View >
//             //     <Text style={styles.item}>
//             //       SplashScreen 启动屏
//             //     </Text>
//             //     <Text style={styles.item}>
//             //       @：http://www.devio.org/
//             //     </Text>
//             //     <Text style={styles.item}>
//             //       GitHub:https://github.com/crazycodeboy
//             //     </Text>
//             //     <Text style={styles.item}>
//             //       Email:crazycodeboy@gmail.com
//             //     </Text>
//             //   </View>
//             // </TouchableOpacity>
//         )
//     }

// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f3f2f2',
//         marginTop: 30
//     },
//     item: {
//         fontSize: 20,
//     },
//     line: {
//         flex: 1,
//         height: 0.3,
//         backgroundColor: 'darkgray',
//     },
// })



///use me ///

import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
// import Home from './Home';
import Shimr from './Shimr';
export default class Splash extends React.Component {
  render() {
    const viewStyles = [styles.container, { backgroundColor: 'orange' }];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold'
    };

    return (
        <View style={{flex:1,}}>
       {/* <View style={viewStyles}> */}
        {/* <Text style={textStyles}>
          Splash Screen
        </Text> */}



            <View style={{flex:1}}>
                    <ImageBackground
                        source={require('../Component/Image/back11.jpg')}
                        style={{flex: 1,resizeMode: 'cover',}}
                        >
                           <Shimr /> 
                     </ImageBackground>     
                        
            </View>
            {/* </View> */}
       </View>
    );
  }
}

// export default class Match extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { isLoading: true }
//   }

//   performTimeConsumingTask = async() => {
//     return new Promise((resolve) =>
//       setTimeout(
//         () => { resolve('result') },
//         2000
//       )
//     );
//   }

//   async componentDidMount() {
//     // Preload data from an external API
//     // Preload data using AsyncStorage
//     const data = await this.performTimeConsumingTask();

//     if (data !== null) {
//       this.setState({ isLoading: false });
//     }
//   }

//   render() {
//     if (this.state.isLoading) {
//       return <Splash />;
//     }

//     return (
//       <View style={styles.container}>
//         {/* <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           Reload the App to see a splash screen
//         </Text> */}

//         {/* <Home/> */}
//         <Text>hiiii</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  back: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});



// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//       fontSize: 20,
//       textAlign: 'center',
//       margin: 10,
//     },
//     instructions: {
//       textAlign: 'center',
//       color: '#333333',
//       marginBottom: 5,
//     },
//   });











