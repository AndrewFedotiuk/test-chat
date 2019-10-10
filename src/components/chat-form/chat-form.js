import React from 'react';

const ChatForm = ()=>{
	return(
		<form action="" className='chat-form'>
			<input className='chat-form__nickname' type="text" placeholder='Nickname'/>
			<input type="text" placeholder='Message'/>
			<button type='submit'>Send</button>
		</form>
	)
};

export default ChatForm;