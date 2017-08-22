import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import StarsRating from '../../components/StarsRating';
import Reactotron from 'reactotron-react-native';
import Swiper from 'react-native-swiper';
import MapView from 'react-native-maps';
import Hyperlink from 'react-native-hyperlink'

//Styles
import { AppStyles, Images } from '../../theme';
const { width } = Dimensions.get('window');

//Components
import BaseComment from './comment';

class ScreenComponent extends Component {

	constructor(props) {
		super(props);
		this.data = this.props.bases.data;

		this.state = {
			data: {}
		}
	}

	componentWillMount() {
		this.setState({
			data: this.data.filter(item => item.id === this.props.id)[0],
		});

	}

	render() {
		return (
			<View style={AppStyles.markup.container}>
				<ScrollView>
					
					{this.state.data.images.length > 0 && 
						<Swiper showsButtons={true} height={AppStyles.details.sliderHeight}>
						{this.state.data.images.map((image_url, key) =>
							<View key={'picture' + key}>
								<Image source={{uri: image_url}} style={{width: width, height: AppStyles.details.sliderHeight}} />
							</View>
						)}
						</Swiper>
					}

					<View style={AppStyles.markup.commonPadding}>
						<Text style={[AppStyles.typo.h1, {marginBottom: 5}]}>
							{this.state.data.title}
						</Text>

						<StarsRating rating={this.state.data.rating} starSize={AppStyles.details.starSize} />
					</View>

					<View style={[AppStyles.markup.commonPadding, AppStyles.details.grayCard]}>

						<View style={AppStyles.details.descriptionRow}>
							<Text style={AppStyles.details.descriptionLeft}>Адрес: </Text>
							<Text style={AppStyles.details.descriptionRight}>{this.state.data.address}</Text>
						</View>

						<View style={AppStyles.details.descriptionRow}>
							<Text style={AppStyles.details.descriptionLeft}>Контакты: </Text>
							<Hyperlink linkDefault={true} linkStyle={AppStyles.typo.link}>
								<Text style={AppStyles.details.descriptionRight}>{this.state.data.contacts}</Text>
							</Hyperlink>
						</View>

						<View style={AppStyles.details.descriptionRow}>
							<Text style={AppStyles.details.descriptionLeft}>Цена: </Text>
							<Text style={AppStyles.details.descriptionRight}>{this.state.data.price}</Text>
						</View>

					</View>
					
					<View style={AppStyles.markup.commonPadding}>
						<Hyperlink linkDefault={true} linkStyle={AppStyles.typo.link}>
							<Text>{this.state.data.description}</Text>
						</Hyperlink>
					</View>

					<View>
						<MapView style={{width: width, height: 200}}
							initialRegion={{
							latitude: parseFloat(this.state.data.posY),
							longitude: parseFloat(this.state.data.posX),
							latitudeDelta: 0.0222,
							longitudeDelta: 0.0061,
							}}
						>
							<MapView.Marker
								coordinate={{latitude: parseFloat(this.state.data.posY), longitude: parseFloat(this.state.data.posX)}}
								title={this.state.data.title}
							/>
						</MapView>
					</View>
					
					<View style={AppStyles.markup.commonPadding}>
						<BaseComment data={{text: "Hello, my comment", author: "Виктор", rating: 3.7}} />
						<BaseComment data={{text: "Seconf comment", author: "Александр", rating: 4.7}} />
						<BaseComment data={{text: "А тут плохой отзыв", author: "Константин", rating: 2}} />
					</View>

				</ScrollView>
			</View>
		);
	}
}

export default connect(
	(store) => ({
		bases: store.bases
	}),
)(ScreenComponent);
