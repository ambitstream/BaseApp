import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';

//Styles
import { AppStyles, Images, Metrics } from '../../theme';

export default class BaseItem extends Component {

	render() {
		return (
			<TouchableOpacity
				style={{flexDirection: 'row', flex: 1, height: 70, borderBottomWidth: 1, borderBottomColor: 'lightgrey', marginTop: 5, marginBottom: 5}}
				onPress={()=>NavActions.single({ id: this.props.id })}>

				<View style={{width:70, height:60}}>
					<Text>
						*****
					</Text>
					<View style={{flexDirection: 'row'}}>
						{this.props.comments_count ? <Image style={{width:20, height:20, marginRight: 4}} source={Images.comments} /> : <Text/> }
						<Text style={{fontWeight: 'bold'}}>{this.props.comments_count}</Text>
					</View>
				</View>

				<View style={{flex: 2}}>
					<Text>
						{this.props.title}
					</Text>
					<Text style={{flex: 2, fontSize: 11}}>
						{this.props.address}
					</Text>
				</View>

				<View style={{width: 100, height: 60, backgroundColor: 'skyblue'}}>
					<Image style={{flex: 1 }} source={{ uri: this.props.images[0] }}></Image>
				</View>

			</TouchableOpacity>
		)
	}

}
