import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import StarsRating from '../../components/StarsRating';
import Reactotron from 'reactotron-react-native';
import Swiper from 'react-native-swiper';
import MapView from 'react-native-maps';
import Hyperlink from 'react-native-hyperlink';

//Styles
import { AppStyles, Images } from '../../theme';
const { width } = Dimensions.get('window');

//Actions
import * as actionCreators from '../../actions/baseActions';

import apiUrl from '../../config/api.js';

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


	componentDidMount() {
		let { storeCommentsData } = this.props.actions,
		{ id } = this.props;

		this.fetchData(apiUrl.comments+'/id/'+id).then( (response, error) => {
			storeCommentsData(response);
		});
	}

	fetchData(url) {
		return new Promise( (resolve, reject) =>{
			let xhr = new XMLHttpRequest;
			xhr.open('GET', url);
			xhr.responseType = 'json';
			xhr.timeout = 10000; // 10 sec
			xhr.onload = ()=>resolve(xhr.response);
			xhr.ontimeout = (e)=>reject(e);
			xhr.send();
		});
	}

	render() {
		let { comments } = this.props.base;

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
						{ comments && comments.length ? comments.map( (item, i) =>
							<BaseComment
								key={'comment_' + item.id + i}
								data={{text: item.text, author: item.name, rating: item.rating, date: item.date, band_name: item.band_name}} />
						) : null }
					</View>

				</ScrollView>
			</View>
		);
	}
}

export default connect(
	(store) => ({
		bases: store.bases,
		base: store.base
	}),
	(dispatch) => ({
		actions: bindActionCreators(actionCreators, dispatch)
	})
)(ScreenComponent);
