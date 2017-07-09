import { Dimensions, Platform } from 'react-native'
const { width, height } = Dimensions.get('window');

const Metrics = {
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export default Metrics;
