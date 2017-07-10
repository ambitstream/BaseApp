import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';

//Styles
import { AppStyles } from '../../theme';

export default class ScreenComponent extends Component {

  render() {
    return (
      <View style={AppStyles.markup.container}>
        {this.props.isFavorites
          ? <Text>There is no favorites bases</Text>
          : <View>
              <Text>This is list of bases:</Text>
              <TouchableOpacity
                onPress={()=>NavActions.single({ id: 1 })}>
                <Text style={AppStyles.typo.link}>Base #1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>NavActions.single({ id: 2 })}>
                <Text style={AppStyles.typo.link}>Base #2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>NavActions.single({ id: 3 })}>
                <Text style={AppStyles.typo.link}>Base #3</Text>
              </TouchableOpacity>
            </View>
        }
      </View>
    );
  }
}
