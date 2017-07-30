import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';
import Reactotron from 'reactotron-react-native';
import Swiper from 'react-native-swiper';

// Data
import data from '../../data/bases';

//Styles
import { AppStyles, Images } from '../../theme';
const { width } = Dimensions.get('window');

export default class ScreenComponent extends Component {
	
	constructor() {
		super();
		
		this.state = {
			data: {},
			images: []
		}
	}
	
	componentDidMount() {
		this.setState({
			data: data[this.props.id],
			images: data[this.props.id].images
		});
		
		Reactotron.log('data: ', this.state.data);
	}
	
	render() {
		return (
			<View style={AppStyles.markup.container}>
				<ScrollView>
					
					<Swiper showsButtons={true} height={300}>
						{this.state.images.map((image_url, key) => 
							<View key={'picture' + key}>
								<Image source={{uri: image_url}} style={{width: width, height: 300}} />
							</View>
						)}
					</Swiper>
					
					<View style={AppStyles.markup.commonPadding}>
						<Text>{this.state.data.title}</Text>
					</View>
					
				</ScrollView>
			</View>
		);
	}
}
