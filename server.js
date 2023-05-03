const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
const io = socet(server);

const tasks = []; // { id: 1, name: "Shopping" }

io.on('connection', (socket) => {
  console.log('New client! Its id - ' + socket.id);
  socket.emit('updateData', tasks);

  socket.on('addTask', task) => {
    tasks.push({ id: socket.id, task: task})
  }
});



app.use((req, res) => {
  res.status(404).send('404 not found...');
});
