import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';

//Styles
import { AppStyles } from '../../theme';

export default class ScreenComponent extends Component {

  render() {
    return (
      <View style={AppStyles.markup.container}>
        <View style={AppStyles.markup.commonPadding}>
          <Text>This is list of markers:</Text>
          <TouchableOpacity
            onPress={()=>NavActions.singleMarker({ id: 14 })}>
            <Text style={AppStyles.typo.link}>Marker #1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>NavActions.singleMarker({ id: 15 })}>
            <Text style={AppStyles.typo.link}>Marker #2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>NavActions.singleMarker({ id: 16 })}>
            <Text style={AppStyles.typo.link}>Marker #3</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
