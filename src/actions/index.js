import types from './constants';

const getMessagesSuccess = (newMessages) => {
	return {
		type: types.GET_MESSAGES_SUCCESS,
		payload: newMessages
	};
};

const fetchMessageRequest = (newMessage) => {
	return {
		type: types.FETCH_MESSAGE_REQUEST,
		payload: newMessage
	};
};

const fetchMessageFailure = (error) => (
	{
		type: types.FETCH_MESSAGE_FAILURE,
		payload: error
	}
);

const socketPending = () => {
	return {
		type: types.SOCKET_PENDING,
	};
};

const socketConnected = () => {
	return {
		type: types.SOCKET_CONNECTED,
		payload: true
	};
};

const socketConnectionFailure = (error) => {
	return {
		type: types.SOCKET_CONNECTION_FAILURE,
		payload: error
	};
};

export{
	getMessagesSuccess,
	fetchMessageRequest,
	fetchMessageFailure,
	socketPending,
	socketConnected,
	socketConnectionFailure
}