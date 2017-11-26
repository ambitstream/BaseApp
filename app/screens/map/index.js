import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

// components
import MapHint from './MapHint';

//Styles
import { AppStyles, Images } from '../../theme';
const { width, height } = Dimensions.get('window');

class ScreenComponent extends Component {

	constructor(props) {
		super(props);
		this.data = this.props.bases.data;
		
		this.state = {
    	    isHintVisible: false,
    	    selectedBase: this.data[0],
		};
	}
	
	showHint(id) {
    	
    	const base = this.data.find(el => el.id === id);
    	
    	this.setState({
        	isHintVisible: true,
        	selectedBase: base,
        });
	}
	
	getMarkerImage(marker_type) {
    	switch (marker_type) {
        	case 'vip':
        	    return Images.icons.marker_vip;
        	    break;
            case 'expired':
        	    return Images.icons.marker_grey;
        	    break;
            default:
                return Images.icons.marker_default;
    	}
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
						    style={{width: 30, height: 60}}
						    image={this.getMarkerImage(base.marker_type)}
						    onSelect={this.showHint.bind(this, base.id)}
							coordinate={{latitude: parseFloat(base.posY), longitude: parseFloat(base.posX)}}
							key={'base_marker_' + base.id}
						/>
					))}
				
				</MapView>
				
				<MapHint data={this.state.selectedBase} visible={this.state.isHintVisible} />				
				
			</View>
		);
	}
}

export default connect(
	(store) => ({
		bases: store.bases
	}),
)(ScreenComponent);