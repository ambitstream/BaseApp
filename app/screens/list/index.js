import React, { Component } from 'react';
import { Text, View, ListView, TextInput, Image } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';

//Styles
import { AppStyles, Images } from '../../theme';

//Components
import BaseItem from './item';

class ScreenComponent extends Component {

	constructor(props) {
		super(props);
		this.data = this.props.bases.data;

		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: this.ds.cloneWithRows(Object.keys(this.data)),
			searchText: '',
		};
	}

	searchChange(text) {
		this.setState({
			text,
			dataSource: this.ds.cloneWithRows(Object.keys(this.data).filter( v => {
				return this.data[v].title.indexOf(text) !== -1 || this.data[v].address.indexOf(text) !== -1
			}))
		});
	}

	render() {
		return (
			<View style={AppStyles.markup.container}>

				<View style={{flexDirection: 'row', paddingTop: 6, paddingBottom: 6, borderBottomColor: '#eee', borderBottomWidth: 2}}>
					<Image source={Images.icons.search} style={{width: 18, height: 18, marginLeft: 10, marginRight: 7}} />
					<TextInput style={{flex:1, height: 20, fontSize: 14}} onChangeText={this.searchChange.bind(this)} placeholder="Поиск..."/>
				</View>

				{this.props.isFavorites
					? <View style={AppStyles.markup.commonPadding}>
							<Text>There is no favorites bases</Text>
						</View>
					: <ListView
							style={AppStyles.markup.commonPadding}
							dataSource={this.state.dataSource}
							renderRow={(rowData) => <BaseItem {...this.data[rowData]} /> }
						/>
				}
			</View>
		);
	}
}
export default connect(
	(store) => ({
		bases: store.bases
	}),
)(ScreenComponent);
