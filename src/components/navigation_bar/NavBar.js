import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native'

const NavBar = () => {
  return (
    <View style={styles.containerStle}>
      <TouchableOpacity>
        <Image
          style={styles.iconStyle} source={require('./../../img/news.png')}
        />
      </ TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.iconStyle} source={require('./../../img/search.png')}
        />
      </ TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.iconStyle} source={require('./../../img/add.png')}
        />
      </ TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.iconStyle} source={require('./../../img/inbox.png')}
        />
      </ TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.iconStyle} source={require('./../../img/profile.png')}
        />
      </ TouchableOpacity>
    </View>
  );
};

const styles = {
  containerStle: {
    backgroundColor: '#ffffff',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  iconStyle: {
    width: 24,
    height: 24,
  }
};

export default NavBar;
