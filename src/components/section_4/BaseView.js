import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => {
  return (
    <View style={[styles.container, styles.tab1Style]}>
      <Text>Posts Tab</Text>
    </View>
  );
};
const SecondRoute = () => {
  return (
    <View style={[styles.container, styles.tab2Style]}>
      <Text>Athlete Tab</Text>
    </View>
  );
};
const ThirdRoute = () => {
  return (
    <View style={[styles.container, styles.tab1Style]}>
      <Text>Videos Tab</Text>
    </View>
  );
};
const FourthRoute = () => {
  return (
    <View style={[styles.container, styles.tab2Style]}>
      <Text>Photos Tab</Text>
    </View>
  );
};

class BaseView extends PureComponent {

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Posts' },
      { key: '2', title: 'Athlete' },
      { key: '3', title: 'Videos' },
      { key: '4', title: 'Photos' },
    ],
  };

  handleIndexChange = index => this.setState({ index });

  renderLabel = ({ route, index }) => (
   <View>
       <Text style={{ color: '#ffffff' }}>{route.title}</Text>
   </View>
  )

  renderHeader = props =>
    <TabBar
      {...props}
      renderLabel={this.renderLabel}
      style={{ backgroundColor: '#000000', paddingTop: 5, paddingBottom: 5 }}
    />;

  renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
    '3': ThirdRoute,
    '4': FourthRoute,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={this.handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab1Style: {
    backgroundColor: '#d4f1ff',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab2Style: {
    backgroundColor: '#5ec9ff',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default BaseView;
