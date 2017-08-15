import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import StarsRating from '../../components/StarsRating';
import Reactotron from 'reactotron-react-native';
import Swiper from 'react-native-swiper';
import MapView from 'react-native-maps';

//Styles
import { AppStyles, Images } from '../../theme';
const { width } = Dimensions.get('window');

class ScreenComponent extends Component {

	constructor(props) {
		super(props);
		this.data = this.props.bases.data;

		this.state = {
			data: {},
			images: []
		}
	}

	componentDidMount() {
		this.setState({
			data: this.data[this.props.id],
			images: this.data[this.props.id].images
		});

	}

	render() {
		return (
			<View style={AppStyles.markup.container}>
				<ScrollView>
					
					{this.state.images.length > 0 && 
						<Swiper showsButtons={true} height={AppStyles.details.sliderHeight}>
						{this.state.images.map((image_url, key) =>
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

						<StarsRating rating={this.data[this.props.id].rating} starSize={AppStyles.details.starSize} />
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
							latitude: parseFloat(this.data[this.props.id].posY),
							longitude: parseFloat(this.data[this.props.id].posX),
							latitudeDelta: 0.0222,
							longitudeDelta: 0.0061,
							}}
						>
							<MapView.Marker
								coordinate={{latitude: parseFloat(this.data[this.props.id].posY), longitude: parseFloat(this.data[this.props.id].posX)}}
								title={this.data[this.props.id].title}
							/>
						</MapView>
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
