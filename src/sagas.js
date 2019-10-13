import {take, call, put, takeEvery} from 'redux-saga/effects';
import {initSocket, createSocketChannel} from './helpers/ws-service';
import types from './actions/constants';

export function* initConnection() {
	yield takeEvery(types.SOCKET_PENDING, watchOnInit);
}

export function* watchOnInit() {
	const socket = yield call(initSocket);
	const chanel = yield call(createSocketChannel, socket);

	yield takeEvery(types.SOCKET_MESSAGE_REQUEST, sendMessage.bind(socket));

	while (true) {
		try {
			const action = yield take(chanel);
			yield put(action);
		} catch (err) {
			console.error('socket error:', err)
		}
	}
}

function* sendMessage(action) {
	this.emit('sendMessage', action.payload);
}