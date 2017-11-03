import React from 'react';
import { View, Text, Image } from 'react-native';

const Details = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.urlSection}>
        <Image
          style={styles.webIcon}
          source={require('./../../img/web.png')}
        />
        <Text style={styles.urlText}>
          http:{'/'}{'/'}www.cbc.ca{'/'}olympics{'/'}trainingground
        </Text>
      </View>
      <Text style={styles.textualDetail}>
        RBC, in partnership with the CBC, the Canadian Olympic Committe (COC)
        and the Canadian Olympic Foundation (COF), is leading the search for
        Canadas next great Olympian. Through RBC training ground, we will find
        those undiscovered athletes with podium potential.
      </Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    paddingTop: 14,
    paddingBottom: 30
  },
  urlSection: {
    marginLeft: 50,
    flexDirection: 'row',
    marginBottom: 20,
  },
  webIcon: {
    width: 14,
    height: 14,
  },
  urlText: {
    fontSize: 12,
    color: '#006699',
    marginLeft: 8,
  },
  textualDetail: {
    fontSize: 10,
    color: '#5b5b5b',
    marginRight: 50,
    marginLeft: 50,
  },
};

export default Details;
