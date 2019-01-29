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
  View,
  Alert
} from 'react-native';
import CoustomKeyboard from 'react-native-customKeyboard';

export default class Example extends Component {
  constructor() {
    super();
    this.state={
      value: '',
      isShowKeyboard: false,
    }
    this.toggleKeyboard = this.toggleKeyboard.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  toggleKeyboard (status) {
    this.setState({
      isShowKeyboard: status
    })
  }
  changeValue (text) {
    console.log(text);
    this.setState({
        value: text
    })
  }
  onConfirm (text) {
    this.toggleKeyboard(false);
    Alert.alert('', `the value is ${text}`)
  }
  render() {
    const { value, isShowKeyboard } = this.state;
    return (
      <View style={styles.container}>
        <Text onPress={() => this.toggleKeyboard(true)} style={styles.text}>
          {!!value ? value : 'please input the value'}
        </Text>
        <CoustomKeyboard isOpen={isShowKeyboard}
                         defaultValue={value} // is must be required
                         buttonLabel="confirm"
                         onTextChange={(text) => this.changeValue(text) }
                         onClosedHandle={() => this.toggleKeyboard(false)}
                         onButtonPress={(text) => this.onConfirm(text) }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    paddingVertical: 10,
      paddingHorizontal: 5,
      width: 200,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#E5E5E5',
  }
});

AppRegistry.registerComponent('Example', () => Example);
