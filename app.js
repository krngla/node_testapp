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


function UserRegister() {
    fetch("http://localhost:8080/register", {
    method: 'POST',
    headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
    },
    body: data
    }).then(function (response) {
        var rsp = response.text();
        console.log(rsp);
        printAnswer(rsp);
        return rsp;
    })
}

function UserLogin() {
    fetch("http://localhost:8080/login", {
        method: 'POST',
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
        },
        body: data
        }).then(function (response) {
            var rsp = response.text();
            var bdy = response.statusText;
            console.log(rsp);
            return rsp;
    }).then(function (data) {

        printAnswer(data);
    })
}


function UserLogout() {
    fetch("http://localhost:8080/logout", {
        method: 'GET',
        headers: {}
        }).then(function (response) {
            var rsp = response.text();
            return rsp;
    }).then(function(data) {
        printAnswer(data);
        printAnswer(JSON.parse(data)["test"]);
    });
}

function printAnswer(string) {
    load_text("responses", string)
}