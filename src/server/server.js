// const { Socket } = require('dgram');

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const socket=io()

const users = {};

io.on('connection', (socket) => {
    socket.on('new-user-joined', (name) => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    })
})

socket.on('send', message => {
    socket.broadcast.emit('receive', { message: message, name: users[socket.id] })
})

http.listen(3000, () => {
    console.log('server is running')
})