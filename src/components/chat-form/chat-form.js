import React from 'react';

const ChatForm = ({onSubmit}) => {
	const onInputChange = (e) => {
		e.persist();
		const validate = e.target.value.trim();

		if (validate === '') {
			e.target.value = validate;
		}
	};
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