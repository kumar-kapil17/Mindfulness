import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default class Breathing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 50, width: '100%', backgroundColor: '#01CBC6'}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'fantasy',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 10,
              color: 'white',
            }}>
            Breathing Meditation video
          </Text>
        </View>

        <View style={{flex: 0.96}}>
          <ScrollView showsVerticalScrollIndicator={false} >
            <TouchableOpacity
              style={{
                height: 200,
                width: '90%',
                marginTop: 20,
                marginLeft: 18,
                borderRadius:7,
                borderWidth: 1,
                borderColor: 'transparent',
              }}
              onPress={() => this.props.navigation.navigate('YoutubeVideo')}>
              <ImageBackground
                source={require('../Component/Image/bm.jpeg')}
                style={{resizeMode: 'contain', width: '100%', height: '100%',borderRadius: 10, overflow: 'hidden',}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    letterSpacing: 2,
                    color: 'white',
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  {' '}
                  MORNING BREATHING{' '}
                </Text>

                <View
                  style={{
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../Component/Image/video.png')}
                    style={{
                      height: 70,
                      width: 70,
                      marginLeft: 5,
                      tintColor: 'white',
                    }}
                  />
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 200,
                width: '90%',
                marginTop: 20,
                marginLeft: 18,
                borderRadius: 5,
              }}
              onPress={() => this.props.navigation.navigate('YoutubeVideo1')}>
              <ImageBackground
                source={require('../Component/Image/bm.jpeg')}
                style={{resizeMode: 'contain', width: '100%', height: '100%',borderRadius: 10, overflow: 'hidden',}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    letterSpacing: 2,
                    color: 'white',
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  DEEP BREATHING 
                </Text>
                <View
                  style={{
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../Component/Image/video.png')}
                    style={{
                      height: 70,
                      width: 70,
                      marginLeft: 5,
                      tintColor: 'white',
                    }}
                  />
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 200,
                width: '90%',
                marginTop: 20,
                marginLeft: 18,
                borderRadius: 5,
              }}>
              <ImageBackground
                source={require('../Component/Image/bm.jpeg')}
                style={{resizeMode: 'contain', width: '100%', height: '100%',borderRadius: 10, overflow: 'hidden',}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    letterSpacing: 2,
                    color: 'white',
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  FOCUSED BREATHING
                </Text>
                <View
                  style={{
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../Component/Image/video.png')}
                    style={{
                      height: 70,
                      width: 70,
                      marginLeft: 5,
                      tintColor: 'white',
                    }}
                  />
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 200,
                width: '90%',
                marginTop: 20,
                marginLeft: 18,
                borderRadius: 5,
              }}>
              <ImageBackground
                source={require('../Component/Image/bm.jpeg')}
                style={{resizeMode: 'contain', width: '100%', height: '100%',borderRadius: 10, overflow: 'hidden',}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    letterSpacing: 2,
                    color: 'white',
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  YOGA BREATHING
                </Text>
                <View
                  style={{
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../Component/Image/video.png')}
                    style={{
                      height: 70,
                      width: 70,
                      marginLeft: 5,
                      tintColor: 'white',
                    }}
                  />
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 200,
                width: '90%',
                marginTop: 20,
                marginLeft: 18,
                borderRadius: 5,
              }}>
              <ImageBackground
                source={require('../Component/Image/bm.jpeg')}
                style={{resizeMode: 'contain', width: '100%', height: '100%',borderRadius: 10, overflow: 'hidden',}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    letterSpacing: 2,
                    color: 'white',
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  CONSCIOUS BREATHING 
                </Text>
                <View
                  style={{
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../Component/Image/video.png')}
                    style={{
                      height: 70,
                      width: 70,
                      marginLeft: 5,
                      tintColor: 'white',
                    }}
                  />
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}
