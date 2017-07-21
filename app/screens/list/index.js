import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ListView, Image } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';

//Styles
import { AppStyles, Images, Metrics } from '../../theme';
import data from '../../data/bases';

class BaseItem extends Component {

	render() {
		return (
			<TouchableOpacity
				onPress={()=>NavActions.single({ id: this.props.id })}
			>

				<View style={{flexDirection: 'row', flex: 1, height: 60}}>

					<View>
						<Image style={{flex: 1 }} source={{ uri: this.props.images[0] }}></Image>
					</View>

					<View style={{flex: 2}}>
						<Text>
							{this.props.title}
						</Text>
						<Text style={{flex: 2, fontSize: 11}}>
							{this.props.address}
						</Text>
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
