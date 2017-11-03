import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const FollowButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyles}>
        Message
      </Text>
    </ TouchableOpacity>
  );
};

const styles = {
  textStyles: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 14,
    paddingTop: 8,
    paddingBottom: 8,
  },
  buttonStyle: {
    backgroundColor: '#000',
    alignSelf: 'stretch',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#3f3f3f',
    marginRight: 50,
    marginLeft: 50,
    marginTop: 20,
  },
};

export default FollowButton;
