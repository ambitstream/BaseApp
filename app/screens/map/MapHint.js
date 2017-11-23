import React, {Component} from 'react';
import { Image, Text, View } from 'react-native';

//Styles
import { Colors, Images, AppStyles } from '../../theme';

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
			    <View style={AppStyles.mainMap.hintBlock}>
    				<Text>{this.props.title}</Text>
				</View>
			</View>
		)
	}
} 