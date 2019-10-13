import io from "socket.io-client";
import {eventChannel} from 'redux-saga';
import {socketConnected, socketConnectionFailure, getMessagesSuccess} from '../actions';

export const initSocket = ()=> io('http://localhost:3500', {transports: ['websocket'], reconnection: true});

export function createSocketChannel(socket) {
	return eventChannel(emit => {

		const connectHandler = () => {
			emit(socketConnected());
			console.log('connected');
		};

		const disconnectHandler = (e) => {
			emit(socketConnectionFailure(e));
			console.log('disconnected');
		};

		const initChatHandler = (e)=>{
			emit(getMessagesSuccess(e));
		};

		const messageAddedHandler = (e)=>{
			emit(getMessagesSuccess(e));
		};

		socket.on('connect', connectHandler);

		socket.on('disconnect', disconnectHandler);

		socket.on('initChat', initChatHandler);

		socket.on('messageAdded', messageAddedHandler);

		return ()=> socket.off('connect', connectHandler);
	})
}