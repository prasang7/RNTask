import React from 'react';
import { View, Text } from 'react-native';
import SocialStats from './SocialStats.js';
import MessageButton from './MessageButton.js';

const Stats = () => {
  return (
    <View style={styles.baseView}>
      <Text style={styles.statsHeading}>RBC Olympians</Text>
      <Text style={styles.statsSubHeading}>Canada</Text>
      <SocialStats />
      <MessageButton onPress={() => {}} />
    </View>
  );
};

const styles = {
  baseView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingTop: 30,
    paddingBottom: 20,
  },
  statsHeading: {
    fontSize: 20,
    color: '#000000'
  },
  statsSubHeading: {
    fontSize: 10,
    color: '#5b5b5b',
    marginBottom: 20,
  },
};

export default Stats;
