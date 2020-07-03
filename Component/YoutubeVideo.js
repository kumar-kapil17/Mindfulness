import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  PixelRatio,
  Platform,
  Button,
  Dimensions,
} from 'react-native';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';

export default class YoutubeVideo extends React.Component {


  state = {
    height: 215
}

handleReady = () => {
    setTimeout(() => this.setState({ height: 216 }), 500);
}

render() {
    return (
      <ScrollView
      showsVerticalScrollIndicator={false}>    
        <View style={styles.container}>
        <YouTube
            apiKey   = 'AIzaSyCm27bVxOVKF_kIEnh-NJXI2_N0T62lZAk'
            ref      = {item => this.player = item}
            videoId  = 'qun9Hyj0hvA'
            controls = {1}
            onReady  = {this.handleReady}
            style    = {{ alignSelf: 'stretch', height: 215 }}
        />
        
        <Text style={{fontSize:15,textAlign:'left',marginLeft:10,marginTop:10}}>
        We have been creating these meditations since 2009. 
        The meditations were begun with one purpose: simply to try and help people. Every meditation is produced with genuine care and love for those people who use them,
        because we too have needed the kind of help our meditations are trying to offer others.Our ethos is to be as all-inclusive and as neutral as possible. 
        We have no religious or other affiliations and try to keep most    of our meditations suitable for everyone.
        </Text>
    
       </View>
        </ScrollView>

    );
}

















  // state = {
  //   isReady: false,
  //   status: null,
  //   quality: null,
  //   error: null,
  //   isPlaying: false,
  //   isLooping: true,
  //   duration: 0,
  //   currentTime: 0,
  //   fullscreen: false,
  //   playerWidth: Dimensions.get('window').width,
  // };

  // _youTubeRef = React.createRef();

  // render() {
  //   return (
  //     <ScrollView style={styles.container}>

  //       <YouTube
  //         ref={this._youTubeRef}
  //         // You must have an API Key for the player to load in Android
  //         apiKey="AIzaSyCm27bVxOVKF_kIEnh-NJXI2_N0T62lZAk"
  //         // Un-comment one of videoId / videoIds / playlist.
  //         // You can also edit these props while Hot-Loading in development mode to see how
  //         // it affects the loaded native module
  //         videoId="qun9Hyj0hvA"
  //         // videoIds={['uMK0prafzw0', 'qzYgSecGQww', 'XXlZfc1TrD0', 'czcjU1w-c6k']}
  //         // playlistId="PLF797E961509B4EB5"
  //         play={this.state.isPlaying}
  //         loop={this.state.isLooping}
  //         fullscreen={this.state.fullscreen}
  //         controls={1}
  //         style={[
  //           { height: PixelRatio.roundToNearestPixel(this.state.playerWidth / (16 / 9)) },
  //           styles.player,
  //         ]}
  //         onError={e => {
  //           this.setState({ error: e.error });
  //         }}
  //         onReady={e => {
  //           this.setState({ isReady: true });
  //         }}
  //         onChangeState={e => {
  //           this.setState({ status: e.state });
  //         }}
  //         onChangeQuality={e => {
  //           this.setState({ quality: e.quality });
  //         }}
  //         onChangeFullscreen={e => {
  //           this.setState({ fullscreen: e.isFullscreen });
  //         }}
  //         onProgress={e => {
  //           this.setState({ currentTime: e.currentTime });
  //         }}
  //       />

        

        
  //     </ScrollView>
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});