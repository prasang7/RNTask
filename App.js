import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header.js';
import Banner from './src/components/section_1/Banner.js';
import Stats from './src/components/section_2/Stats.js';
import Details from './src/components/section_3/Details.js';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'BALLPRK'} />
        <Banner />
        <Stats />
        <Details />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});
