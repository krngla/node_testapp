const socket = new WebSocket('ws://localhost:8080')

socket.addEventListener('open', (event) => {
    socket.send('Data');
})

socket.addEventListener('message', (event) => {
    console.log('message from server ', event.data);
})

var form = document.querySelector("form");
var text = document.querySelector("input[type=text]")
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    socket.send(text.value);
    text.value = ""
    console.log(e.data)
});

