const { Server } = require('socket.io');

const io = new Server(3000, { cors: {
    origin: "*"
  } });
  const users={}

io.on("connection", (socket) => {

socket.on('new-user-join',(name)=>{ 
   users[socket.id]=name;
socket.broadcast.emit('user-joined',name);
})

socket.on('send',(message)=>{
socket.broadcast.emit('recived',message);
})
socket.on('disconnect',(reason)=>{
socket.broadcast.emit('disconnected','user disconnected');
})
});
