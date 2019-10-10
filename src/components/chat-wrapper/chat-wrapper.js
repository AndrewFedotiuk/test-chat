import React from 'react';
import ChatForm from "../chat-form";
import ChatMessageList from '../chat-message-list';

export default class ChatWrapper extends React.Component {
	render() {
		return (
			<section className='chat-wrapper'>
				<ChatMessageList/>
				<ChatForm/>
			</section>
		)
	}
}