import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';
import StarsRating from '../../components/StarsRating';
import Reactotron from 'reactotron-react-native';
import Swiper from 'react-native-swiper';
import MapView from 'react-native-maps';

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
		
	}
	
	render() {
		return (
			<View style={AppStyles.markup.container}>
				<ScrollView>
					
					<Swiper showsButtons={true} height={AppStyles.details.sliderHeight}>
						{this.state.images.map((image_url, key) => 
							<View key={'picture' + key}>
								<Image source={{uri: image_url}} style={{width: width, height: AppStyles.details.sliderHeight}} />
							</View>
						)}
					</Swiper>
					
					<View style={AppStyles.markup.commonPadding}>
						<Text style={[AppStyles.typo.h1, {marginBottom: 5}]}>
							{this.state.data.title}
						</Text>
						
						<StarsRating rating={data[this.props.id].rating} starSize={AppStyles.details.starSize} /> 
					</View>										
					
					<View style={[AppStyles.markup.commonPadding, AppStyles.details.grayCard]}>

						<View style={AppStyles.details.descriptionRow}>
							<Text style={AppStyles.details.descriptionLeft}>Адрес: </Text>
							<Text style={AppStyles.details.descriptionRight}>{this.state.data.address}</Text>
						</View>
						
						<View style={AppStyles.details.descriptionRow}>
							<Text style={AppStyles.details.descriptionLeft}>Контакты: </Text>
							<Text style={AppStyles.details.descriptionRight}>{this.state.data.contacts}</Text>
						</View>
						
						<View style={AppStyles.details.descriptionRow}>
							<Text style={AppStyles.details.descriptionLeft}>Цена: </Text>
							<Text style={AppStyles.details.descriptionRight}>{this.state.data.price}</Text>
						</View>
						
					</View>
					
					<View style={AppStyles.markup.commonPadding}>
						<Text>{this.state.data.description}</Text>
					</View>
					
					<View>
						<MapView style={{width: width, height: 200}}
							initialRegion={{
							latitude: parseFloat(data[this.props.id].posY),
							longitude: parseFloat(data[this.props.id].posX),
							latitudeDelta: 0.0222,
							longitudeDelta: 0.0061,
							}}
						>
							<MapView.Marker
								coordinate={{latitude: parseFloat(data[this.props.id].posY), longitude: parseFloat(data[this.props.id].posX)}}
								title={data[this.props.id].title}
							/>
						</MapView>
					</View>
					
				</ScrollView>
			</View>
		);
	}
}
