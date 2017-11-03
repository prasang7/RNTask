import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header.js';
import Banner from './src/components/section_1/Banner.js';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'BALLPRK'} />
        <Banner />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F599FF',
  }
});
