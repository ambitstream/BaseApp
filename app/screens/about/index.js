import React, { Component } from 'react';
import { Text, View } from 'react-native';

//Styles
import { AppStyles } from '../../theme';

export default class ScreenComponent extends Component {

  render() {
    return (
      <View style={AppStyles.markup.container}>
				<View style={AppStyles.markup.commonPadding}>
	        <Text>This is about page</Text>
				</View>
      </View>
    );
  }
}
