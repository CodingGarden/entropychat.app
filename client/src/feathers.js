import io from 'socket.io-client';
import feathers from '@feathersjs/client';
import socketio from '@feathersjs/socketio-client';

const socket = io('http://localhost:3030', {
  transports: ['websocket'],
});
const client = feathers();
client.configure(socketio(socket));
client.configure(feathers.authentication({
  storageKey: 'auth',
  storage: localStorage,
}));

export default client;
