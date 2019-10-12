import React from 'react';

const errorContainer = (validate)=>{
	if (validate) return <span className='error-container'>{validate ? 'All fields can not be empty' : null}</span>
};
const ChatForm = ({onSubmit, validate}) => {
	return (
		<>
			{errorContainer(validate)}
			<form action="" className={`chat-form ${validate ? 'error' : ''}`} onSubmit={onSubmit}>
				<input name='nickname' className='chat-form__nickname' type="text" placeholder='Nickname' required/>
				<input name='message' type="text" placeholder='Message' required/>
				<button type='submit'>Send</button>
			</form>
		</>
	)
};

export default ChatForm;