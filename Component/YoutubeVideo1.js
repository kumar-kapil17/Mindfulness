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

export default class YoutubeVideo1 extends React.Component {


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
            videoId  = 'F28MGLlpP90'
            controls = {1}
            onReady  = {this.handleReady}
            style    = {{ alignSelf: 'stretch', height: 215 }}
        />
        
        <Text style={{fontSize:15,textAlign:'left',marginLeft:10,marginTop:10}}>
        In their quest for deep meditation, some meditators who think they are not progressing fast enough
        may be tempted to switch techniques. But this may not be the best option. Know that it takes patience,
        time and training to master meditation, “deep” or otherwise. Mindfulness is an integral part of any
        meditation practice. Through mindfulness we explore the connection between body and mind. 
        We learn to be aware of what we’re experiencing without being swept away by thoughts and feelings,
        including the pleasurable feelings that accompany deep meditation—or by expectations for results 
        that don’t come fast enough!

        </Text>

       <Text style={{fontSize:20,marginLeft:5}}> The Secrets of Deep Meditation</Text> 

       <Text style={{fontSize:15,textAlign:'left',marginLeft:10,marginTop:10}}>
        I’ve noticed that when experienced meditators go in search of a means to deepen their meditation, 
        they often start by looking for a new technique.

         Sure enough, you may find that a new technique gives your meditation a boost, but in most cases, 
         once you have learned how to meditate, the best way to improve the depth of your meditation is to
         keep using the same technique, but to approach it a little differently (I'll get into this more 
         in a moment). It may also be beneficial to you to make some positive changes to your lifestyle. 
      </Text>
    
       </View>
        </ScrollView>

    );
}


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