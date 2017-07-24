import React, { Component } from 'react';
import { Router, Scene, Actions as NavActions } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux'

import Store from '../config/store';

const RouterWithRedux = connect()(Router);
const store = Store;

// Screens
import Splash from '../screens/splash';
import Map from '../screens/map';
import List from '../screens/list';
import Single from '../screens/single';
import About from '../screens/about';

// Components
import TabIcon from '../components/TabIcon';

// Styles
import { AppStyles } from '../theme';

// Disable back button config
const disableBackButton = {
  hideBackImage: true,
  onBack: ()=>null
}

export default class App extends Component {
  render() {
    return (
			<Provider store={store}>
        <RouterWithRedux>
	        <Scene key='root' hideNavBar hideTabBar>

	          <Scene
	            initial={false}
	            hideNavBar={true}
	            key='splash'
	            component={Splash}
	            title='Splash' />

	          <Scene
	            key='tabbar'
	            gestureEnabled={false}
							initial={true}
	            tabs
	            tabBarSelectedItemStyle={AppStyles.tabBar.selectedItem}
	            tabBarStyle={AppStyles.tabBar.holder}>

	            <Scene key='map' title='Map' tabBarLabel='Map' icon={TabIcon}>
	              <Scene
	                key='markerList'
	                component={Map}
	                title='Map'
	                {...disableBackButton} />
	              <Scene
	                key='singleMarker'
	                component={Single}
	                title='Single base'
	                back />
	            </Scene>
	            <Scene key='bases' title='List' tabBarLabel='List' icon={TabIcon}>
	              <Scene
	                key='list'
	                component={List}
	                title='List'
	                {...disableBackButton} />
	              <Scene
	                key='single'
	                component={Single}
	                title='Single base'
	                back />
	            </Scene>
	            <Scene
	              key='favorites'
	              component={List}
	              title='Favorites'
	              icon={TabIcon}
	              isFavorites={true}
	              {...disableBackButton} />
	            <Scene
								initial={true}
	              key='about'
	              component={About}
	              title='About'
	              icon={TabIcon}
	              {...disableBackButton} />
	          </Scene>

	        </Scene>
	      </RouterWithRedux>
			</Provider>
    )
  }
}
