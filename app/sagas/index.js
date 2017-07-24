import { takeLatest } from 'redux-saga';

// Service Sagas
import { startup } from './app';

export default function * root () {
  yield [
    takeLatest(STARTUP, startup),
	];
}
