import React, {Component} from 'react';
import { Image, Text, View } from 'react-native';
import Reactotron from 'reactotron-react-native';

//Styles
import { Colors, Images } from '../theme';

export default class StarsRating extends Component {
	
	constructor(props) {
		super(props);		
		this.starSize = props.starSize || 12;		
	}
	
	render() {
		
		let stars = [];
		for (let i=1; i<=5; i++) {
			stars.push('star');
		}
		// 
		Reactotron.log(stars);
		
		return (
			<View style={{flex: 1, flexDirection: 'row'}}>
				{stars.map(star_type => <Image source={Images.icons[star_type]} style={{width: this.starSize, height: this.starSize}}/> )}
			</View>
		)
	}
} 