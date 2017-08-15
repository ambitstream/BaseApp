import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';
import StarsRating from '../../components/StarsRating';

//Styles
import { AppStyles, Images, Metrics } from '../../theme';

export default class BaseItem extends Component {

	render() {
		return (
			<TouchableOpacity
				style={[AppStyles.list.base, (this.props.is_vip ? AppStyles.list.vipBase : {})]}
				onPress={()=>NavActions.single({ id: this.props.id })}>

				<View style={AppStyles.list.imageBlock}>
					<Image style={{flex: 1 }} source={{ uri: this.props.images[0] }}></Image>
				</View>

				<View style={AppStyles.list.centerBlock.block}>
					<Text style={AppStyles.list.centerBlock.title}>
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
