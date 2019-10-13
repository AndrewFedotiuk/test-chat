import types from '../actions/constants';

const updateWsConnection = (state, action)=>{
	if (state === undefined) {
		return {
			sockedConnected: false,
			loading: true,
			error: null,
		}
	}

	switch (action.type) {
		case types.SOCKET_PENDING:
			return {
				sockedConnected: false,
				loading: true,
				error: null
			};
		case types.SOCKET_CONNECTED:
			return {
				sockedConnected: action.payload,
				loading: false,
				error: null
			};
		case types.SOCKET_CONNECTION_FAILURE:
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