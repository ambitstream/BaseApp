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
    },
    h1: {
	  fontSize: 20,
	  fontWeight: 'bold',
    }
  },
  tabBar: {
    holder: {
      backgroundColor: Colors.background.primary,
    },
    fontSize: 12,
    selectedItem: {
      backgroundColor: Colors.background.light,
    },
    item: {
	  flex:1, 
	  flexDirection: 'column', 
	  alignItems: 'center',
	},
    icon: {
	  marginTop: 6,
	  marginBottom: 3,
	  width: 24,
	  height: 24
    }
  },
  //Screens
  splash: {
    image: {
      marginVertical: Metrics.baseMargin,
    }
  },
  
  details: {
    sliderHeight: 200,
    starSize: 24,
    grayCard: {
	  backgroundColor: '#efefef',
	  borderTopWidth: 2,
	  borderTopColor: '#ddd',
	  borderBottomWidth: 2,
	  borderBottomColor: '#ddd',
    },
    descriptionRow: {
	  flex: 1,
	  flexDirection: 'row',
	  marginTop: 5,
	  marginBottom: 5,
    },
    descriptionLeft: {
	  width: 100,
	  fontWeight: 'bold'
    },
    descriptionRight: {
	  flex: 1,
    },
  }

}

export default AppStyles;
