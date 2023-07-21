const socket = io("http://127.0.0.1:3000");
var messagecontainer=document.querySelector('.container');
var messagecontent=document.querySelector('.msg');
var sent=document.getElementById('form');
const  name=prompt('enter');

const append=(message,position)=>{
const messagelement = document.createElement('div');
messagelement.innerText=message;
messagelement.classList.add('msg');
messagelement.classList.add(position);
messagecontainer.append(messagelement)
var h=messagecontainer.clientHeight;
messagecontainer.scrollBy(0,h);
}

var form=document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text=document.getElementById('text');
    var msgdata= text.value;
    append(msgdata,"right");
    socket.emit('send',msgdata);
    text.value=" ";
})
socket.emit('new-user-join', name);
socket.on('user-joined',(name)=>{
    append(`${name} has joined the chat`,'center');
})


socket.on('recived',(message)=>{
    append(message,"left");
})
socket.on('disconnected',(message)=>{
    append(message,"center");
})
