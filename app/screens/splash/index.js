import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';

//Styles
import { AppStyles, Images } from '../../theme';

export default class ScreenComponent extends Component {
  render() {
    return (
      <View style={AppStyles.markup.container}>
        <Image source={Images.splash} style={AppStyles.splash.image} />

        <Text>Welcome to KievBase App!</Text>

        <TouchableOpacity onPress={NavActions.tabbar}>
          <Text style={AppStyles.typo.link}>Get started</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
