import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ListView } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';

//Styles
import { AppStyles } from '../../theme';
import data from '../../data/bases'; 

class BaseItem extends Component {
	
	render() { 
		return (
			<Text>
				{this.props.title}
			</Text>
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
					? <Text>There is no favorites bases</Text>
					: <View>
					
						<Text>This is list of bases:</Text>
						
						<TouchableOpacity
							onPress={()=>NavActions.single({ id: 1 })}>
							<Text style={AppStyles.typo.link}>Base #1</Text>
						</TouchableOpacity>
						
						<ListView
							dataSource={this.state.dataSource}
							renderRow={(rowData) => <BaseItem {...data[rowData]} /> }
						/>
						
					</View>
				}
			</View>
		);
	}
}
