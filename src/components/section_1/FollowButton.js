import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const FollowButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyles}>
        Follow
      </Text>
    </ TouchableOpacity>
  );
};

const styles = {
  textStyles: {
    alignSelf: 'center',
    color: '#3f3f3f',
    fontSize: 14,
    paddingTop: 8,
    paddingBottom: 8,
  },
  buttonStyle: {
    backgroundColor: '#fff',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#3f3f3f',
    width: 80,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
};

export default FollowButton;
