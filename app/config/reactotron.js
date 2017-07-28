import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';

if (__DEV__) {
	Reactotron
		.configure()
		.use(trackGlobalErrors())
		.connect()

	console.tron = Reactotron;
	console.log = console.tron.log;
	console.error = console.tron.error;

} else {

	console.tron = {
		log: () => false,
		warn: () => false,
		error: () => false,
		display: () => false,
		image: () => false
	}
}
