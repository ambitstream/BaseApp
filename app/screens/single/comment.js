import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import StarsRating from '../../components/StarsRating';

//Styles
import { AppStyles, Images, Metrics } from '../../theme';

export default class BaseComment extends Component {
	
	render() {
		return (
			<View>
				<Text>Comment</Text>
			</View>
		)
	}
	
}