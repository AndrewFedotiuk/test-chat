import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ChatForm from "../chat-form";
import ChatMessageList from '../chat-message-list';
import {socketPending, messagesRequest} from '../../actions';

const mapDispatchToProps = (dispatch, {updateWsConnection, updateMessageList}) => {
	return bindActionCreators({socketPending, messagesRequest}, dispatch);
};

const getInputsValues = (e) => {
	console.log(e);
	return {
		userName: e.target.elements.userName.value.trim(),
		message: e.target.elements.message.value.trim(),
	}
};

const ChatWrapper = ({socketPending, messagesRequest}) => {
	const onSubmit = (e) => {
		e.persist();
		e.preventDefault();
		const values = getInputsValues(e);
		messagesRequest(values);
	};

	useEffect(() => {
		socketPending();
	});

	return (
		<section className='chat-wrapper'>
			<ChatMessageList/>
			<ChatForm onSubmit={onSubmit}/>
		</section>
	)
};

export default connect(null, mapDispatchToProps)(ChatWrapper);