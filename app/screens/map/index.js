import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

//Styles
import { AppStyles } from '../../theme';
const { width, height } = Dimensions.get('window');

class ScreenComponent extends Component {

	constructor(props) {
		super(props);
		this.data = this.props.bases.data;
	}

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
				
					{this.data.map(base => (
						<MapView.Marker
							coordinate={{latitude: parseFloat(base.posY), longitude: parseFloat(base.posX)}}
							title={base.title}
							description={base.address}
							key={'base_marker_' + base.id}
						/>
					))}
				
				</MapView>
			</View>
		);
	}
}

export default connect(
	(store) => ({
		bases: store.bases
	}),
)(ScreenComponent);