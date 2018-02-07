var app = require('express')();
var path = require('path');
var serveStatic = require('serve-static');

var http = require('http').createServer( app);
var io = require('socket.io')(http);

const projects = {};

app.use(serveStatic(path.join(__dirname, '../www'), {
}))

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, '../www', 'index.html'));
});

io.on('connection', function (socket) {
  console.log('socket connected!', socket.id);

  socket.on('joinRoom', function(projectName) {
    socket.join(projectName);
    console.log('joined room', projectName);

    if(projects[projectName]) {
      projects[projectName].users++;
    } else {
      projects[projectName] = {
        users: 1,
        currentTask: null,
        tasks: []
      };
    }

    io.sockets.in(projectName).emit('projectData', projects[projectName])

    socket.on('tasks', (tasks) => {
      console.log('logging task from server', tasks);

      projects[projectName].tasks = tasks.map((task) => {
        return {
          name: task,
          currentTask: task,
          votes: []
        }
      });

      io.sockets.in(projectName).emit('tasks', projects[projectName].tasks)
    });

    socket.on('votes', (vote) => {
      // Whenever someone votes, I need to add the vote to the votes array
      // Once all users have voted -- look at length of the votes array of the current task, then tell all of clients to move onto the next task (by sending an event; let them know)
      // Then move onto the next task by updating the current task to increment to the next task in the taskList, and display that.
      io.sockets.in(projectName).emit('votes', projects[projectName].votes)
    });

    socket.on('disconnect', function(){
      projects[projectName].users--;

      if(projects[projectName].users === 0) {
        delete projects[projectName];
      }
    });
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
