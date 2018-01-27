// import * as io from "socket.io-client";

  export const connection = io.connect('localhost:3000');

  connection.on('connect', function(data) {
    console.log('client connected', data)
  });




