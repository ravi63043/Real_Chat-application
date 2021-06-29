const socket=io('http://localhost:3000', { transports: ['websocket', 'polling', 'flashsocket'] });
const messageContainer=document.getElementById('message-container');
const messageForm=document.getElementById('send-container');
const messageInput=document.getElementById('message-input')
socket.on('chat-message',data=>{
    appendMessage(`${data.name}:${data.message}`);
})
socket.on('user-connected',name=>{
    appendMessage(`${name} connected`);
})
socket.on('user-disconnected',name=>{
    appendMessage(`${name} disconnected`);
})
appendMessage('You joined')
const name=prompt("your name:")
socket.emit('new-user',name)
messageForm.addEventListener('submit',e=>{
    e.preventDefault();
    const message=messageInput.value 
    appendMessage(`You :${message}`)
    socket.emit('send-chat-message',message);
    messageInput.value=''
})
function appendMessage(message){
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageContainer.append(messageElement)

}