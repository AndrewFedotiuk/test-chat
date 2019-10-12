import io from "socket.io-client";
import {eventChannel} from 'redux-saga';
import {socketConnected, socketConnectionFailure} from '../actions';

export const initSocket = ()=> io('http://localhost:3500', {transports: ['websocket'], reconnection: true});

export function createSocketChannel(socket) {
	return eventChannel(emit => {

		const connectHandler = () => {
			emit(socketConnected());
			console.log('connected');
		};

		const disconnectHandler = () => {
			emit(socketConnectionFailure);
			console.log('disconnected');
		};

		socket.on('connect', connectHandler);

		socket.on('disconnect', disconnectHandler);

		return ()=> socket.off('connect', connectHandler);
	})
}