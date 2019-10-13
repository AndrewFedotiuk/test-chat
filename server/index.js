const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const Chat = require('./message-service');

io.on('connection', socket => {
	console.log('a user connected');

	Chat.getLastMessages()
		.then((data) => {
			io.emit('initChat', data);
		});

	socket.on('sendMessage', async (data) => {
		await Chat.addNewMessage(data);
		const response = await Chat.getLastMessages();
		io.emit('messageAdded', response);
	});

	socket.on('disconnect', () => {
		console.log('user are disconnected');
	})
});

http.listen(3500, () => {
	console.log('Ready')
});