import React, { Component } from 'react';
import { Text, View, ListView, TextInput, Image } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';

//Styles
import { AppStyles, Images } from '../../theme';

//Components
import BaseItem from '../../components/BaseItem';

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

				<View style={AppStyles.searchBar.container}>
					<View style={AppStyles.searchBar.inputWrapper}>
						<Image source={Images.icons.search} style={AppStyles.searchBar.searchIcon} />
						<TextInput
							style={AppStyles.searchBar.input}
							onChangeText={this.searchChange.bind(this)}
							placeholder="Поиск..." />
						<Image source={Images.icons.close} style={AppStyles.searchBar.closeIcon} />
					</View>
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
