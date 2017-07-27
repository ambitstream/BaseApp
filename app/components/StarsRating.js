import React, {Component} from 'react';
import { Image, Text, View } from 'react-native';
import Reactotron from 'reactotron-react-native';

//Styles
import { Colors, Images } from '../theme';

export default class StarsRating extends Component {
	
	constructor(props) {
		super(props);		
		this.starSize = props.starSize || 12;
		this.rating = props.rating || 0;
	}
	
	render() {
		
		let stars = [];
		
		for (let i=1; i<=5; i++) {
			if (this.rating < i) {
				if (this.rating >= i - 0.5) {
					stars.push('star_half');
				}
				else {
					stars.push('star');
				}
			}
			else {
				stars.push('star_full');
			}
			
		}
		
		return (
			<View style={{flex: 1, flexDirection: 'row'}}>
				{stars.map((star_type, i) => <Image 
					key={'star_' + i}
					source={Images.icons[star_type]} 
					style={{width: this.starSize, height: this.starSize}}
				/> )}
			</View>
		)
	}
} 