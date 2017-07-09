import Metrics from './metrics'
import Colors from './colors'
import { Platform } from 'react-native';

const AppStyles = {
  markup: {
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  typo: {
    link: {
      color: Colors.basic.extra
    }
  },
  //Screens
  splash: {
    image: {
      marginVertical: Metrics.baseMargin,
    }
  }

}

export default AppStyles;
