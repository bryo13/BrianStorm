import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={headerStyle.nav}>
        <Image
          source={require('../assets/handshake.png')}
          style={{width:45, height: 45}}
        />
      </View>
    );
  }
}

const headerStyle = StyleSheet.create({
  nav: {
    alignItems: 'center',
    height: 50,
    borderBottomColor: 'silver',
    borderBottomWidth: 2,
  },
});

export default Header;
