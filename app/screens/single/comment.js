import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import StarsRating from '../../components/StarsRating';

//Styles
import { AppStyles, Images, Metrics } from '../../theme';

export default class BaseComment extends Component {
	
	render() {
		return (
			<View style={AppStyles.comment.container}>
				<View style={{flex: 1, flexDirection: 'row'}}>
					
					<Text style={{flex: 1}}>
						{this.props.data.author}
					</Text>
					
					<View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
					    <View >
						    <StarsRating starSize={12} rating={this.props.data.rating} />
						</View>
					</View>
					
				</View>
				
				<Text style={{fontWeight: 'bold', marginBottom: 10}}>
					{this.props.data.band_name}
				</Text>
				
				<Text>
    				{this.props.data.text}
                </Text>
                
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
    				<Text style={{fontSize: 11}}>
    				    {this.props.data.date}
    				</Text>
				</View>
			</View>
		)
	}
	
}