import React, { Component } from 'react';
import { AsyncStorage, Text, TouchableWithoutFeedback,
	View, Image, Animated, ActivityIndicator } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Styles
import { AppStyles, Images } from '../../theme';

//Actions
import * as actionCreators from '../../actions/splash';

import apiUrl from '../../config/api.js';

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
		let { storeBasesData } = this.props.actions;

		this.fetchData(apiUrl.bases).then( (response, error) => {
			AsyncStorage.setItem('bases', JSON.stringify(response));
			storeBasesData(response);
			NavActions.tabbar();
		}, e => {
			AsyncStorage.getItem('bases').then( localData => {
				if (localData) {
					storeBasesData(JSON.parse(localData));
					alert('Нет подключения к серверу, используем закешированные данные.');
					NavActions.tabbar();
				} else {
					alert('Нет подключения к серверу. Попробуйте позже.');
				}
			}).done();
		});
	}

	fetchData(url) {
		return new Promise( (resolve, reject) =>{
			let xhr = new XMLHttpRequest;
			xhr.open('GET', url);
			xhr.responseType = 'json';
			xhr.timeout = 10000; // 10 sec
			xhr.onload = ()=>resolve(xhr.response);
			xhr.ontimeout = (e)=>reject(e);
			xhr.send();
		});
	}

	render() {
		return (
			<View style={AppStyles.markup.containerSplash}>

				<View style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
					<Image source={require('../../assets/images/splash-background.jpg')} style={{flex: 1, width: null, height: null, resizeMode:'stretch'}} />
				</View>

				<ActivityIndicator />

				<Anim>
					<Image source={Images.logo} style={{width:266, height: 34, marginBottom: 10, marginTop: 20}} />
				</Anim>

				<Text style={{color: '#fff'}}>
					Карта репетиционных баз
				</Text>

			</View>
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
