/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Image,
  View
} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class RNtest1 extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

class RNtest extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.style1}>
          <Text style={{fontSize:20}}>React Native</Text>
          <Image source={require('./images/1.png')} style={{width: 192, height: 108}} />
        </View>
        <View style={styles.style1}>
          <Text style={{fontSize:20}}>React Native</Text>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 100, height: 100}} />
        </View>
        <View style={styles.style1}>
          <Text style={{fontSize:20}}>React Native</Text>
          <Image source={require('./images/1.jpg')} style={{width: 192, height: 108}} />
        </View>
        <View style={styles.style1}>
          <Text style={{fontSize:20}}>React Native</Text>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 100, height: 100}} />
        </View>
        <View style={styles.style1}>
          <Text style={{fontSize:20}}>React Native</Text>
          <Image source={require('./images/2.jpg')} style={{width: 192, height: 108}} />
        </View>
        <View style={styles.style1}>
          <Text style={{fontSize:20}}>React Native</Text>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 100, height: 100}} />
        </View>
        <View style={styles.style1}>
          <Text style={{fontSize:20}}>React Native</Text>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 100, height: 100}} />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  style1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  style2: {

  }
}


AppRegistry.registerComponent('RNtest', () => RNtest);
