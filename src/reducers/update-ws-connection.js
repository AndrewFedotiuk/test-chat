const updateWsConnection = (state, action)=>{
	if (state === undefined) {
		return {
			sockedConnected: false,
			loading: true,
			error: null,
		}
	}

	switch (action.type) {
		case 'SOCKET_PENDING':
			return {
				sockedConnected: false,
				loading: true,
				error: null
			};
		case 'SOCKET_CONNECTED':
			return {
				sockedConnected: action.payload,
				loading: false,
				error: null
			};
		case 'SOCKET_CONNECTION_FAILURE':
			return {
				sockedConnected: false,
				loading: false,
				error: action.payload
			};
		default:
			return state.updateWsConnection
	}
};

export default updateWsConnection;