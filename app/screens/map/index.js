import React, { Component } from 'react';
import { Text, TouchableOpacity, TouchableWithoutFeedback, View, Dimensions, Image } from 'react-native';
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

        // reset preview image
        this.setState({
            selectedBase: {
                images: [],
            },
        });

        // set small timeout to let preview image reset first, then load new data from url
        setTimeout(() => {
            this.setState({
            	isHintVisible: true,
            	selectedBase: base,
            });
        }, 100);

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
						key={'base_marker_' + base.id}
						anchor={{x: 0.5, y: 1}}
						coordinate={{latitude: parseFloat(base.posY), longitude: parseFloat(base.posX)}}
					>
						<TouchableOpacity
							activeOpacity={0.9}
							style={AppStyles.mainMap.markerOverlay}
							onPress={this.showHint.bind(this, base.id)}>

							<Image source={this.getMarkerImage(base.marker_type)} style={AppStyles.mainMap.markerIcon} />

						</TouchableOpacity>
					</MapView.Marker>
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
