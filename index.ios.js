import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import './app/config/reactotron';
import Reactotron from 'reactotron-react-native';
import App from './app/containers/App';

export default class KievBaseApp extends Component {
  render() {
    Reactotron.log('App is rendered');
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('KievBase', () => KievBaseApp);
