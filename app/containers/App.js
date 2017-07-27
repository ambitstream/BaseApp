import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Router, Scene, Actions as NavActions } from 'react-native-router-flux';

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
      <Router>
        <Scene key='root' hideNavBar hideTabBar>

          <Scene
            initial={true}
            hideNavBar={true}
            key='splash'
            component={Splash}
            title='Splash' />

          <Scene
            key='tabbar'
            gestureEnabled={false}
            tabs
            tabBarSelectedItemStyle={AppStyles.tabBar.selectedItem}
            tabBarStyle={AppStyles.tabBar.holder}>

            <Scene key='map' title='Карта' tabBarLabel='Карта' icon={TabIcon} iconName='map'>
              <Scene
                key='markerList'
                component={Map}
                title='Карта репетиционных баз'
                {...disableBackButton} />
              <Scene
                key='singleMarker'
                component={Single}
                title='Single base'
                back />
            </Scene>
            <Scene key='bases' title='Список' tabBarLabel='Список' icon={TabIcon} iconName='list'>
              <Scene
                key='list'
                component={List}
                title='Список баз'
                {...disableBackButton} />
              <Scene
                key='single'
                component={Single}
                title='Single base'
                back />
            </Scene>
            <Scene
              key='about'
              component={About}
              title='О проекте'
              icon={TabIcon}
              iconName='user'
              {...disableBackButton} />
          </Scene>

        </Scene>
      </Router>
    )
  }
}
