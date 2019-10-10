const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
	console.log('a user connected');
});

app.listen(3500, () => {
	console.log('Ready')
});