import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ListView, Image } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';
import StarsRating from '../../components/StarsRating';

//Styles
import { AppStyles, Images, Metrics } from '../../theme';
import data from '../../data/bases';

class BaseItem extends Component {

	render() {
		return (
			<TouchableOpacity
				onPress={()=>NavActions.single({ id: this.props.id })}
			>

				<View style={{flexDirection: 'row', flex: 1, height: 70, borderBottomWidth: 1, borderBottomColor: 'lightgrey', marginTop: 5, marginBottom: 5}}>

					<View style={{width:70, height:60}}>
						<StarsRating rating={this.props.rating} />
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

				</View>
			</TouchableOpacity>
		)
	}

}

export default class ScreenComponent extends Component {

	constructor() {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(Object.keys(data)),
		};
	}

	render() {
		return (
			<View style={AppStyles.markup.container}>
				{this.props.isFavorites
					? <View style={AppStyles.markup.commonPadding}>
							<Text>There is no favorites bases</Text>
						</View>
					: <ListView
							style={AppStyles.markup.commonPadding}
							dataSource={this.state.dataSource}
							renderRow={(rowData) => <BaseItem {...data[rowData]} /> }
						/>
				}
			</View>
		);
	}
}
