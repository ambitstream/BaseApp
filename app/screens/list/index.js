import React, { Component } from 'react';
import { Text, View, ListView, TextInput } from 'react-native';
import Reactotron from 'reactotron-react-native';

//Styles
import { AppStyles} from '../../theme';

// Data
import data from '../../data/bases';

//Components
import BaseItem from './item';

export default class ScreenComponent extends Component {

	constructor() {
		super();
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: this.ds.cloneWithRows(Object.keys(data)),
			searchText: '',
		};
	}
	
	searchChange(text) {
		this.setState({
			text,
			dataSource: this.ds.cloneWithRows(Object.keys(data).filter( v => {
				return data[v].title.indexOf(text) !== -1 || data[v].address.indexOf(text) !== -1
			}))
		});
	}

	render() {
		return (
			<View style={AppStyles.markup.container}>
			
				<TextInput style={{height: 30}} onChangeText={this.searchChange.bind(this)} placeholder="Поиск..."/>
				
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
