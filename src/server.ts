import app from "./app";
import config from './config.json'

const PORT = config.Api.port

let server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

let io = require('socket.io')(server);
app.set('socketio', io);
io.on('connection', (socket: any) => {
    console.log('New client connected');
    socket.on('on-client-clicked', () => { console.log('on-client-clicked') });
});

