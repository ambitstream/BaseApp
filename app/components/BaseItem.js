import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';
import StarsRating from './StarsRating';

//Styles
import { AppStyles, Images, Metrics } from '../theme';

export default class BaseItem extends Component {

	constructor(props) {
		super(props);

		this.state = {
			imageLoading: false
		}
	}
	onLoadStart() {
		this.setState({
			imageLoading: true
		});
	}
	onLoadEnd() {
		this.setState({
			imageLoading: false
		});
	}

	render() {
		const navKey = (this.props.source == 'map') ? 'singleMarker' : 'single';

		return (
			<TouchableOpacity
				style={[AppStyles.list.base, (this.props.is_vip ? AppStyles.list.vipBase : {})]}
				onPress={()=>NavActions[navKey]({ id: this.props.id })}>

				<View style={AppStyles.list.imageBlock}>
					<Image
						onLoadStart={ this.onLoadStart.bind(this) }
						onLoadEnd={ this.onLoadEnd.bind(this) }
						style={{flex: 1 }}
						source={{ uri: this.props.images[0] }} />
					{ this.state.imageLoading ?
						<ActivityIndicator style={ AppStyles.list.imageLoader } color='black' />
					: null }
				</View>

				<View style={AppStyles.list.centerBlock.block}>
					<Text style={AppStyles.list.centerBlock.title} numberOfLines={2}>
						{this.props.title}
					</Text>
					<Text style={AppStyles.list.centerBlock.subtitle}>
						{this.props.address}
					</Text>
				</View>

				<View style={{width:70, height:60}}>

					<StarsRating rating={this.props.rating} starSize={12} />

					<View style={AppStyles.list.ratingBlock.block}>
						{this.props.comments_count ? <Image style={AppStyles.list.ratingBlock.commentsIcon} source={Images.comments} /> : <Text/> }
						<Text style={AppStyles.list.commentsCount}>{this.props.comments_count}</Text>
					</View>
				</View>

			</TouchableOpacity>
		)
	}

}
