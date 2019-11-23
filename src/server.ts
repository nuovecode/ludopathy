import app from "./app";
import config from './config.json'

const PORT = config.Api.port

//console.log(app.get('socketio'))
let server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

let io = require('socket.io')(server);

io.on('connection', (socket: any) => {
    console.log('New client connected');
    socket.on('join', function() {
        console.log('joined');
        socket.emit('on-connection', { message: 'on-connection' });
    });
    socket.on('on-client-clicked', function() {
        console.log('on-client-clicked')
        socket.broadcast.emit('broad','broad');
    });
});

