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
  
  // LIST
  list: {
	base: {
	  flexDirection: 'row', 
	  flex: 1, 
	  height: 70, 
	  borderBottomWidth: 1, 
	  borderBottomColor: 'lightgrey', 
	  marginTop: 3, 
	  marginBottom: 3,
	  paddingTop: 5,
	},
	imageBlock: {
	  width: 60, 
	  height: 60, 
	  backgroundColor: 'skyblue', 
	  marginRight: 7
	},
	vipBase: {
	  backgroundColor: Colors.background.vip,
	},
	centerBlock: {
		block: {
		  flex: 2
		},
		title: {
		  fontWeight: 'bold'
		},
		subtitle: {
		  flex: 2, 
		  fontSize: 11, 
		  marginTop: 5
		},
	},
	ratingBlock: {
	  block: {
		flexDirection: 'row'
	  },
	  commentsIcon: {
		width:20, 
		height:20, 
		marginRight: 4
	  },
	  commentsCount: {
		fontWeight: 'bold'
	  }
	}
  },
  
  // DETAILS
  details: {
    sliderHeight: 200,
    starSize: 24,
    grayCard: {
	  backgroundColor: '#f9f9f9',
	  borderTopWidth: 2,
	  borderTopColor: '#eee',
	  borderBottomWidth: 2,
	  borderBottomColor: '#eee',
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
