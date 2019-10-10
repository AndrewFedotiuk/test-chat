import updateMessageList from './update-message-list';

const reducer = (state, action) => {
	return {
		updateMessageList: updateMessageList(state, action),
	}
};

export default reducer;