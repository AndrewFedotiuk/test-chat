import React, {useEffect} from 'react';
import {connect} from 'react-redux'

const ChatMessageListItem = ({userName, message}) => {
	return (
		<>
			<p><b>{userName}</b></p>
			<p>{message}</p>
		</>
	)
};

const ChatMessageList = ({messages, loading, errors, chatSection}) => {
	useEffect(()=>{
		chatSection.current.scrollTop = chatSection.current.scrollHeight;
	});

	if (loading) {
		return (
			<div className='center-absolute'>loading...</div>
		)
	}

	if (errors) {
		return (
			<div className='center-absolute'>{errors}</div>
		)
	}

	if (messages.length === 0) {
		return (
			<div className='center-absolute'>No messages</div>
		)
	}

	return (
		<ul className='chat-message-list'>
			{
				messages.map(({userName, message, id}) => {
					return (
						<li key={id}>
							<ChatMessageListItem
								userName={userName}
								message={message}/>
						</li>
					)
				})
			}
		</ul>
	)
};

const mapStateToProps = ({updateMessageList: {messages, loading, errors}}) => {
	return {messages, loading, errors};
};

export default connect(mapStateToProps)(ChatMessageList);