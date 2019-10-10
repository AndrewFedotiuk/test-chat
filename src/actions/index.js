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

export{
	messagesLoaded,
	messagesRequested,
	messagesError
}