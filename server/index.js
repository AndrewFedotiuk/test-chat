const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
	console.log('a user connected');

	socket.on('submitMessage', (data) => {
		console.log(data);
		console.log('polucheno');
		io.emit('submitMessage', 'polucheno');
	});

	socket.on('disconnect', () => {
		console.log('user are disconnected');
	})
});

http.listen(3500, () => {
	console.log('Ready')
});