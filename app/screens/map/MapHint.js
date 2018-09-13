import React, {Component} from 'react';
import { Image, Text, View } from 'react-native';

//Styles
import { Colors, Images, AppStyles } from '../../theme';

// components
import BaseItem from '../../components/BaseItem';

export default class MapHint extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<View style={[
    			{marginTop: this.props.visible ? AppStyles.mainMap.hintPosition : 0},
    			AppStyles.mainMap.hintContainer
            ]}>

                <BaseItem {...this.props.data} source='map' />

			</View>
		)
	}
}
