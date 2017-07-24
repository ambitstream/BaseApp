import Reactotron, { trackGlobalErrors as errorPlugin } from 'reactotron-react-native';
import apisaucePlugin from 'reactotron-apisauce';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {

	Reactotron
		.configure({
			name: 'KievBaseApp' ,
			enabled: __DEV__
		})
		.use(errorPlugin())
		.use(apisaucePlugin())
		.use(sagaPlugin())
		.connect()

	// Totally hacky, but this allows you to not both importing reactotron-react-native
	// on every file.  This is just DEV mode, so no big deal.
	console.tron = Reactotron

	console.log = console.tron.log
  console.error = console.tron.error

} else {
	// a mock version should you decide to leave console.tron in your codebase
	console.tron = {
		log: () => false,
		warn: () => false,
		error: () => false,
		display: () => false,
		image: () => false
	}
}
