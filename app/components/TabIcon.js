import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Reactotron from 'reactotron-react-native';

//Styles
import { Colors } from '../theme';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => {
  let color = props.selected ? Colors.basic.extra : Colors.basic.primary;
  return <Text style={{color}}>{props.title}</Text>
};

TabIcon.propTypes = propTypes;

export default TabIcon;
