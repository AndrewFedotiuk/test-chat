import React from 'react';
import onInputChange from './helper-on-input-change';

const ChatForm = ({onSubmit}) => {
	return (
		<form action="" className='chat-form' onSubmit={onSubmit}>
			<input name='userName'
			       type="text"
			       className='chat-form__nickname'
			       placeholder='Nickname'
			       required
			       onChange={onInputChange}
			/>
			<input name='message'
			       type="text"
			       placeholder='Message'
			       required
			       onChange={onInputChange}
			/>
			<button type='submit'>Send</button>
		</form>
	)
};

export default ChatForm;