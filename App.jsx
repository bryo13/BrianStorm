import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from './components/Header';

class BrainStorm extends React.Component {
  render() {
    return (
      <View style={style.mainView}>
        <Header />
        <View>
          <Text>Goal Text input</Text>
        </View>
        <View>
          <Text>Header</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});
export default BrainStorm;
