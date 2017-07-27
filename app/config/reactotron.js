import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
  .configure() // controls connection & communication settings
	.use(trackGlobalErrors())
	// .use(reactotronRedux())
  //.useReactNative() // add all built-in react native plugins
	// .use(reactotronRedux())
  .connect() // let's connect!
