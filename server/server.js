var app = require('express')();
var path = require('path');
var serveStatic = require('serve-static')

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(serveStatic(path.join(__dirname, '../www'), {
}))

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, '../www', 'index.html'));
});

io.on('connection', function (socket) {
  console.log('a user connected!');

  socket.on('tasks', (task) => {
    console.log('task', task)
    // io.sockets emits to all of the sockets
    io.sockets.emit('tasks', task);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
