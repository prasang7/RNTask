import React from 'react';
import { View, Text } from 'react-native';

const SocialStats = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.innerContainer}>
        <Text>7 Mil</Text>
        <Text style={styles.describerText}>The Posts</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text>17546</Text>
        <Text style={styles.describerText}>Followers</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text>312</Text>
        <Text style={styles.describerText}>Following</Text>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  describerText: {
    fontSize: 10,
  }
};

export default SocialStats;
