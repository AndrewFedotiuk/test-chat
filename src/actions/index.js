import types from './constants';

const getMessagesSuccess = (newMessages) => ({
		type: types.GET_MESSAGES_SUCCESS,
		payload: newMessages
});

const fetchMessageRequest = (newMessage) => ({
		type: types.SOCKET_MESSAGE_REQUEST,
		payload: newMessage
});

const socketPending = () => ({
		type: types.SOCKET_PENDING,
});

const socketConnected = () => ({
		type: types.SOCKET_CONNECTED,
		payload: true
});

const socketConnectionFailure = (error) => ({
		type: types.SOCKET_CONNECTION_FAILURE,
		payload: error
});

export{
	getMessagesSuccess,
	fetchMessageRequest,
	socketPending,
	socketConnected,
	socketConnectionFailure
}