import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

// Screens
import Splash from '../screens/splash';
import About from '../screens/about';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">

          <Scene
            initial={true}
            hideNavBar={true}
            key="splash"
            component={Splash}
            title="Splash" />
          <Scene
            hideNavBar={false}
            key="about"
            component={About}
            title="About" />

        </Scene>
      </Router>
    )
  }
}
