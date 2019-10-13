const messagesLoaded = (newMessagess) => {
	return {
		type: 'INIT_MESSAGE_SUCCESS',
		payload: newMessagess
	};
};

const messagesRequest = (newMessage) => {
	return {
		type: 'FETCH_MESSAGE_REQUEST',
		payload: newMessage
	};
};

const messagesError = (error) => (
	{
		type: 'FETCH_MESSAGE_FAILURE',
		payload: error
	}
);

const socketPending = () => {
	return {
		type: 'SOCKET_PENDING',
	};
};

const socketConnected = () => {
	return {
		type: 'SOCKET_CONNECTED',
		payload: true
	};
};

const socketConnectionFailure = (error) => {
	return {
		type: 'SOCKET_CONNECTION_FAILURE',
		payload: error
	};
};

export{
	messagesLoaded,
	messagesRequest,
	messagesError,
	socketPending,
	socketConnected,
	socketConnectionFailure
}