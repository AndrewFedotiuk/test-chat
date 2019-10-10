import React from 'react';
import ChatForm from "../chat-form";
import ChatMessageList from '../chat-message-list';
import io from 'socket.io-client';

export default class ChatWrapper extends React.Component {

	render() {
		const socket = io('http://localhost:3500', {transports: ['websocket']});
		console.log(socket);
		return (
			<section className='chat-wrapper'>
				<ChatMessageList/>
				<ChatForm/>
			</section>
		)
	}
}