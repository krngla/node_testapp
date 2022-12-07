/*const socket = new WebSocket('ws://localhost:8080')

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
*/

var test = {"Hello":"World"}

fetch("http://localhost:8080").then(function (response) {
    var rsp = response.text();
    console.log(rsp)
    return rsp
});
const data = new URLSearchParams()

data.append("username", "user2")
data.append("password", "password")


fetch("http://localhost:8080/register", {
    method: 'POST',
    headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
    },
    body: data
    }).then(function (response) {
        var rsp = response.text();
        console.log(rsp);
        return rsp;
})

fetch("http://localhost:8080/login", {
    method: 'POST',
    headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
    },
    body: data
    }).then(function (response) {
        var rsp = response.text();
        console.log(rsp);
        return rsp;
})


fetch("http://localhost:8080/logout", {
    method: 'GET',
    headers: {}
    }).then(function (response) {
        var rsp = response.text();
        console.log(rsp);
        return rsp;
})
