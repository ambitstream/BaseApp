// import './app/config/reactotron';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './app/containers/App'

export default class KievBaseApp extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('KievBase', () => KievBaseApp);
