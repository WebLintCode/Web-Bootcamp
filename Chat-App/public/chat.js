var socket = io.connect('http://localhost:4000')

var person  = document.getElementById('person'),
    appChat = document.getElementById('app-chat'),
    welcomePanel = document.getElementById("welcome-panel"),
    user = document.getElementById('user'),
    message =  document.getElementById('message'),
    sendButton = document.getElementById('send'),
    writingMessage = document.getElementById('writing-message'),
    output = document.getElementById('output');

sendButton.addEventListener('click', function(){
    if(message.value){
        socket.emit('chat', {
            message: message.value,
            user: user.value
        })
    }
    message.value = '';
});

message.addEventListener('keyup', function(){
    if(person.value){
        socket.emit('typing', {
            name: user.value,
            text: message.value
        });
    }
});

socket.on('chat', function(data){
    writingMessage.innerHTML = '';
    output.innerHTML +='<p><strong>' + data.user + ': </strong>' + data.message + '</p>'

});

socket.on('typing', function(data){
    if(data.text){
        writingMessage.innerHTML = '<p><em>' + data.name + ' is writing a message...</em></p>';
    }else{
        writingMessage.innerHTML = '';
    }
})
 function enterChat(){
  
        if(person.value){
            welcomePanel.style.display = 'none';
            appChat.style.display = 'block';
            var nameOfUser = person.value;
            user.value = nameOfUser;
            user.readOnly = true;
        }
}