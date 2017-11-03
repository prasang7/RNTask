import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './src/components/Header.js';
import Banner from './src/components/section_1/Banner.js';
import Stats from './src/components/section_2/Stats.js';
import Details from './src/components/section_3/Details.js';
import BaseView from './src/components/section_4/BaseView.js';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'BALLPRK'} />
        <ScrollView>
          <View style={styles.container}>
            <Banner />
            <Stats />
            <Details />
            <BaseView />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});
