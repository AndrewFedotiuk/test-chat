import updateMessageList from './update-message-list';
import updateWsConnection from './update-ws-connection';

const reducer = (state, action) => {
	return {
		updateMessageList: updateMessageList(state, action),
		updateWsConnection: updateWsConnection(state, action)
	}
};

export default reducer;