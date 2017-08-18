import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';
import MapView from 'react-native-maps';

//Styles
import { AppStyles } from '../../theme';
const { width, height } = Dimensions.get('window');

export default class ScreenComponent extends Component {

	render() {
		return (
			<View style={AppStyles.markup.container}>
				<MapView style={{width: width, height: height}}
					initialRegion={{
						latitude: 50.455203,
						longitude: 30.511413,
						latitudeDelta: 0.25,
						longitudeDelta: 0.0061,
					}}
				>
				</MapView>
			</View>
		);
	}
}
