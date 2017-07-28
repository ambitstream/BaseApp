import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image, Animated } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Styles
import { AppStyles, Images } from '../../theme';

//Actions
import * as actionCreators from '../../actions/splash';

class Anim extends React.Component {
	state = {
		fadeAnim: new Animated.Value(0),
	}

	componentDidMount() {
		Animated.timing(
			this.state.fadeAnim,
			{
				toValue: 1,
				duration: 1000,
			}
		).start();
	}

	render() {
		return(
			<Animated.View
				style={{
					...this.props.style,
					opacity: this.state.fadeAnim,
				}}
			>
				{this.props.children}
			</Animated.View>
		);
	}
}

class ScreenComponent extends Component {

	componentDidMount() {
		this.fetchData().then( (response, error) => {
			this.props.actions.storeBasesData(response);
			NavActions.tabbar();
		});
	}

	fetchData() {
		return new Promise( (resolve, reject) =>{
			let xhr = new XMLHttpRequest;
			xhr.open('GET', 'https://api.base.kiev.ua/v2/bases-list/');
			xhr.responseType = 'json';
			xhr.send();

			xhr.addEventListener('load', ()=>{
				resolve(xhr.response);
			});
		});
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={()=>NavActions.tabbar()}>
				<View style={AppStyles.markup.containerSplash}>

					<View style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
						<Image source={require('../../assets/images/splash-background.jpg')} style={{flex: 1, width: null, height: null, resizeMode:'stretch'}} />
					</View>

					<Anim>
						<Image source={Images.logo} style={{width:266, height: 34, marginBottom: 10, marginTop: 50}} />
					</Anim>

					<Text style={{color: '#fff'}}>
						Карта репетиционных баз
					</Text>

				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default connect(
	(store) => ({
		state: store
	}),
	(dispatch) => ({
		actions: bindActionCreators(actionCreators, dispatch)
	})
)(ScreenComponent);
