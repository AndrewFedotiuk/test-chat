import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ChatForm from "../chat-form";
import ChatMessageList from '../chat-message-list';
import {socketPending, fetchMessageRequest} from '../../actions';

const mapDispatchToProps = (dispatch, {updateWsConnection, updateMessageList}) => (
	bindActionCreators({socketPending, fetchMessageRequest}, dispatch)
);

const getInputsValues = (e) => ({
	userName: e.target.elements.userName.value.trim(),
	message: e.target.elements.message.value.trim(),
});

const ChatWrapper = ({socketPending, fetchMessageRequest}) => {
	let chatSection = React.createRef();

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
		<section className='chat-wrapper' ref={chatSection}>
			<ChatMessageList chatSection={chatSection}/>
			<ChatForm onSubmit={onSubmit}/>
		</section>
	)
};

export default connect(null, mapDispatchToProps)(ChatWrapper);