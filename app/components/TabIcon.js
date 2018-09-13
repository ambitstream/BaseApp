import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

//Styles
import { Colors, Images, AppStyles } from '../theme';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => {
  let fontWeight = props.selected ? '500' : '300';
  return (

  	<View style={AppStyles.tabBar.item}>
  	  <Image source={Images.icons[props.iconName]} style={AppStyles.tabBar.icon} />
  	  <Text style={{fontWeight, fontSize: AppStyles.tabBar.fontSize}}>{props.title}</Text>
    </View>

  )
};

TabIcon.propTypes = propTypes;

export default TabIcon;
