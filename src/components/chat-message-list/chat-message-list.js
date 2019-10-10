import React from 'react';
import {connect} from 'react-redux'

const ChatMessageListItem = ({userName, message})=>{
	return(
		<li>
			<p><b>{userName}</b></p>
			<p>{message}</p>
		</li>
		)
};

const ChatMessageList = ({messages, loading, errors}) => {
	// console.log(messages, loading, errors);

	if(loading){
		return (
			<div className='center-absolute'>loading...</div>
		)
	}

	if(errors){
		return (
			<div className='center-absolute'>{errors}</div>
		)
	}

	return (
		<ul className='chat-message-list'>
			{
				messages.map((message, index)=>{
					return(
						<ChatMessageListItem key={index} userName={message.userName} message={message.message}/>
					)
				})
			}
		</ul>
	)
};

const mapStateToProps = ({updateMessageList:{messages, loading, errors}}) => {
	return{messages, loading, errors};
};

export default connect(mapStateToProps)(ChatMessageList);