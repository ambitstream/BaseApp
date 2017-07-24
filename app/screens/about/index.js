import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

//Styles
import { AppStyles } from '../../theme';

class ScreenComponent extends Component {
	componentDidMount() {
		console.log('hello rendering world')
		console.log(this.props)
	}

  render() {
    return (
      <View style={AppStyles.markup.container}>
				<View style={AppStyles.markup.commonPadding}>
	        <Text>This is about page</Text>
	        <Text>{/*this.props.routes.scene.title*/}</Text>
				</View>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(ScreenComponent);

// export default connect(
//   (store) => ({
//     state: store
//   }),
  // ( dispatch ) => ({
  //   actions: bindActionCreators({ ...actionCreators, langSelect, showModalError, showContacts, touchIDAbort, showModalFingerprint, closeModal }, dispatch )
  // }),
  // null, { withRef: true }
// )(ScreenComponent);
