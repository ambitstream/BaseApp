import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { Actions as NavActions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';

// Container Actions
import * as actionCreators from './actions';

//Styles
import { AppStyles, Metrics, Images, Colors } from '../../theme';

//Components
import Tile from '../../components/tile';

//Navigation props
const NavProps = {
  title: 'transfersScreen',
  rightImageHide: true,
  leftImageHide: true,
};
export { NavProps };

export class ScreenComponent extends Component {
  constructor( params ) {
    super( params );
  }

  componentDidMount() {
    this.props.actions.resetTransfers();
  }

  componentDidUpdate() {
    this.props.actions.resetTransfers();
  }

  render() {
    return (
      <View style={ AppStyles.screen.mainContainer }>
        <View style={[ AppStyles.scrollView.wrapper, AppStyles.options.withNavbar,
            AppStyles.options.tabBorder, { width: Metrics.screenWidth }]}>

          <ScrollView style={{ width: Metrics.screenWidth }}>
            <View style={ AppStyles.tileHolder }>
              <Tile
                onPress={() => { NavActions.transfersSelf() }}
                text={ I18n.t('onYourCardsAndAccounts') }
                iconSvg='transfersSelf' />
              <Tile
                onPress={() => { NavActions.transfersOther() }}
                text={ I18n.t('onSomeoneCardsOrAccounts') }
                iconSvg='transfersOther' />
              <Tile
                onPress={() => { NavActions.paymentTemplates() }}
                text={ I18n.t('paymentTemplates') }
                iconSvg='transfersTemplates' />
              <Tile
                onPress={() => { NavActions.regularPayments() }}
                text={ I18n.t('regularPayments') }
                iconSvg='transfersRegular' />
            </View>
          </ScrollView>

        </View>
      </View>
    );
  }
}

export default connect(
  ( store ) => ({
    // state: store.
  }),
  ( dispatch ) => ({
    actions: bindActionCreators( actionCreators, dispatch )
  }),
  null, { withRef: true }
)( ScreenComponent );
