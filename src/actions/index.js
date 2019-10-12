const messagesLoaded = (newBooks) => {
	return {
		type: 'FETCH_MESSAGE_SUCCESS',
		payload: newBooks
	};
};

const messagesRequested = () => {
	return {
		type: 'FETCH_MESSAGE_REQUESTED',
	};
};

const messagesError = (error) => {
	return {
		type: 'FETCH_MESSAGE_FAILURE',
		payload: error
	};
};

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
	messagesRequested,
	messagesError,
	socketPending,
	socketConnected,
	socketConnectionFailure
}