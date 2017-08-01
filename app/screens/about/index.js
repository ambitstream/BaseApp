import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

//Styles
import { AppStyles } from '../../theme';

class ScreenComponent extends Component {
	render() {
		return (
			<View style={AppStyles.markup.container}>
				<View style={AppStyles.markup.commonPadding}>
					<Text>This is about page</Text>
				</View>
			</View>
		);
	}
}

export default connect(
	(store) => ({
		state: store
	}),
)(ScreenComponent);
