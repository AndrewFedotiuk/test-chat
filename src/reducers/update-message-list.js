import types from '../actions/constants';

const updateMessageList = (state, action)=>{
	if (state === undefined) {
		return {
			messages: [],
			loading: true,
			error: null,
		}
	}
	switch (action.type) {
		case types.GET_MESSAGES_SUCCESS:
			return {
				messages: action.payload,
				loading: false,
				error: null
			};

		case types.FETCH_MESSAGE_REQUEST:
			return {
				messages: state.updateMessageList.messages,
				loading: true,
				error: null
			};

		case 'FETCH_MESSAGE_FAILURE':
			return {
				messages: [],
				loading: false,
				error: action.payload
			};
		default:
			return state.updateMessageList
	}
};


export default updateMessageList;