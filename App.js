import React from 'react';
import { Text, View } from 'react-native';
import Buttons from './src/components/buttons';
import Styles from './css'

export default class App extends React.Component {
  render() {
    return (
      <View style = {Styles.container}>
        <Text style = {{fontSize: 20}}>What do you want to do?</Text>
        <Buttons />
      </View>
    );
  }
}
