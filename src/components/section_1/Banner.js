import React from 'react';
import { View, Text, Image } from 'react-native';
import ImageSection from './ImageSection.js';
import FollowButton from './FollowButton.js';

const Banner = () => {
    return (
      <View style={styles.bannerStyle}>
        <Text style={styles.headingStyle}>
          Supporting Olympic Athletes Since 1947
        </Text>
        <ImageSection />
        <Text style={styles.subheadingStyle}>
          Premier National Partner
        </Text>
        <FollowButton onPress={() => {}} />
      </View>
    );
};

const styles = {
  bannerStyle: {
    backgroundColor: '#006699',
    paddingTop: 18,
    paddingBottom: 18,
  },
  headingStyle: {
    fontSize: 14,
    color: '#ffffff',
    alignSelf: 'center',
  },
  subheadingStyle: {
    fontSize: 10,
    color: '#ffffff',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
};

export default Banner;
