const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log(`Usuário conectado: ${socket.id}`);

    socket.on('join_room', (data) => {
        socket.join(data.room)
        console.log(`Usuário ${data.username} entrou na sala: ${data.room}`);

        socket.to(data.room).emit('receive_message', {
            username: 'Sistema',
            message: `${data.username} entrou no chat!`,
            time: new Date().toLocaleTimeString()
        });
    });

    socket.on('send_message', (data) => {
        io.in(data.room).emit('receive_message', data);
    });

    socket.on('disconnect', () => {
        console.log('Usuário Desconectado', socket.id);
    });
});

server.listen(3001, () => {
    console.log('SERVIDO RODANDO NA PORTA 3001');
});