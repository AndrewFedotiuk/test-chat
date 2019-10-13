import React from 'react';

const ChatMessageListItem = ({userName, message}) => {
	return (
		<>
			<p><b>{userName}</b></p>
			<p>{message}</p>
		</>
	)
};

export default ChatMessageListItem;