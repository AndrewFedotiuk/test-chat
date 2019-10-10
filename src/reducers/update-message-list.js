const updateMessageList = (state, action)=>{
	if (state === undefined) {
		return {
			messages: [
				{
					userName: 'test',
					message: 'test text'
				}
			],
			loading: true,
			error: null,
		}
	}
	switch (action.type) {
		case 'FETCH_MESSAGE_REQUESTED':
			return {
				messages: [],
				loading: true,
				error: null
			};
		case 'FETCH_MESSAGE_SUCCESS':
			return {
				messages: action.payload,
				loading: false,
				error: null
			};
		case 'FETCH_MESSAGE_FAILURE':
			return {
				messages: [],
				loading: false,
				error: action.payload
			};
		default:
			return state.messages
	}
};


export default updateMessageList;