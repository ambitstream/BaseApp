import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import Reactotron from 'reactotron-react-native';

//Styles
import { Colors, Images, AppStyles } from '../theme';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => {
  let color = props.selected ? Colors.basic.extra : Colors.basic.primary;
  return (
	  
  	<View style={AppStyles.tabBar.item}>
  	  <Image source={Images.icons[props.iconName]} style={AppStyles.tabBar.icon} />
  	  <Text style={{color: color, fontSize: AppStyles.tabBar.fontSize}}>{props.title}</Text>
    </View>
    
  )
};

TabIcon.propTypes = propTypes;

export default TabIcon;
