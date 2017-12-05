import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import StarsRating from '../../components/StarsRating';

//Styles
import { AppStyles, Images, Metrics } from '../../theme';

export default class BaseComment extends Component {
	
	render() {
		return (
			<View style={AppStyles.comment.container}>
				<View style={AppStyles.comment.headerBlock}>
					
					<Text style={AppStyles.comment.author}>
						{this.props.data.author}
					</Text>
					
					<View style={AppStyles.comment.rating}>
					    <View >
						    <StarsRating starSize={12} rating={this.props.data.rating} />
						</View>
					</View>
					
				</View>
				
				<Text style={AppStyles.comment.band}>
					{this.props.data.band_name}
				</Text>
				
				<Text>
    				{this.props.data.text}
                </Text>
                
                <View style={AppStyles.comment.date}>
    				<Text style={AppStyles.comment.dateFont}>
    				    {this.props.data.date}
    				</Text>
				</View>
			</View>
		)
	}
	
}