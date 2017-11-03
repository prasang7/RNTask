import React from 'react';
import { View, Image } from 'react-native';

const ImageSection = () => {
  return (
    <View style={styles.imageSection}>
      <Image
        style={styles.RBCIcon}
        source={require('./../../img/rbcLogo.png')}
      />
      <View
        style={{ width: 1, height: 70, backgroundColor: '#ffffff' }}
      />
      <Image
        style={styles.canadaIcon}
        source={require('./../../img/canadaOlympic.png')}
      />
    </View>
  );
};

const styles = {
  imageSection: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  canadaIcon: {
    width: 40,
    height: 62,
    marginLeft: 20,
  },
  RBCIcon: {
    width: 40,
    height: 60,
    marginRight: 20,
  },
};

export default ImageSection;
