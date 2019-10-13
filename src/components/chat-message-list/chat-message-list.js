import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import ChatMessageListItem from './helper-chat-message-list-item';

const ChatMessageList = ({messages, loading, errors, chatSection}) => {
	useEffect(() => {
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

const mapStateToProps = ({updateMessageList: {messages, loading, errors}}) => (
	{messages, loading, errors}
);

export default connect(mapStateToProps)(ChatMessageList);