import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';

//Styles
import { AppStyles } from '../../theme';

//Data
import data from '../../data/bases';

//Components
import BaseItem from './item';

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
