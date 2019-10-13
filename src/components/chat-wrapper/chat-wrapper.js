import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ChatForm from "../chat-form";
import ChatMessageList from '../chat-message-list';
import {socketPending, fetchMessageRequest} from '../../actions';

const mapDispatchToProps = (dispatch, {updateWsConnection, updateMessageList}) => {
	return bindActionCreators({socketPending, fetchMessageRequest}, dispatch);
};

const getInputsValues = (e) => {
	return {
		userName: e.target.elements.userName.value.trim(),
		message: e.target.elements.message.value.trim(),
	}
};

const ChatWrapper = ({socketPending, fetchMessageRequest}) => {
	const onSubmit = (e) => {
		e.persist();
		e.preventDefault();
		const values = getInputsValues(e);
		fetchMessageRequest(values);
		e.target.elements.message.value = '';
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