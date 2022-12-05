import got from 'got';
console.log("Hello, world")
const url = 'localhost:8090/hello';
const response = await got(url);
document.getElementById("demo").innerHTML = response.text
