import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import StarsRating from '../../components/StarsRating';

//Styles
import { AppStyles, Images, Metrics } from '../../theme';

export default class BaseComment extends Component {
	
	render() {
		return (
			<View>
				<View>
					<Text>
						{this.props.data.author}
					</Text>
					<View>
						<StarsRating starSize={12} rating={this.props.data.rating} />
					</View>
				</View>
				<Text>{this.props.data.text}</Text>
			</View>
		)
	}
	
}