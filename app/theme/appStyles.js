import Metrics from './metrics'
import Colors from './colors'
import { Platform } from 'react-native';

const AppStyles = {
  markup: {
		containerSplash: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
			paddingTop: Metrics.headerHeight,
			paddingBottom: Metrics.footerHeight,
    },
		commonPadding: {
			padding: Metrics.baseMargin
		},
  },
  typo: {
    link: {
      color: Colors.basic.extra
    }
  },
  tabBar: {
    holder: {
      backgroundColor: Colors.background.primary,
    },
    selectedItem: {
      backgroundColor: Colors.background.light,
    },
  },
  //Screens
  splash: {
    image: {
      marginVertical: Metrics.baseMargin,
    }
  }

}

export default AppStyles;
