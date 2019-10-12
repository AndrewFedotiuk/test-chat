import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ChatForm from "../chat-form";
import ChatMessageList from '../chat-message-list';
import {socketPending} from '../../actions';

const mapDispatchToProps = (dispatch, {updateWsConnection}) => {
	return bindActionCreators({socketPending}, dispatch)
};

const getInputsValues = (e) => {
	return Array.prototype.slice.call(e.target)
		.filter(el => el.name)
		.reduce(function (form, el) {
			form.push(el.value.trim());
			return form;
		}, [])
};

class ChatWrapper extends React.Component {
	state = {
		validate: false
	};

	onSubmit = (e) => {
		e.persist();
		e.preventDefault();
		const values = getInputsValues(e);
		values.forEach(
			val => val.length === 0 ?
				this.setState({ validate: true}) :
				this.setState({ validate: false}));

		// this.state.socket.emit('submitMessage', values);
	};

	componentDidMount() {
		const {socketPending} = this.props;
		socketPending();
	}

	render() {
		return (
			<section className='chat-wrapper'>
				<ChatMessageList/>
				<ChatForm onSubmit={this.onSubmit} validate={this.state.validate}/>
			</section>
		)
	}
}

export default connect(null, mapDispatchToProps)(ChatWrapper);