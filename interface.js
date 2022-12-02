
function TESTEST() {
    document.getElementById("demo").innerHTML = "PLS WAIT"
    https.get('127.0.0.1:8090/test', (resp) => {
        let data= '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            //console.log(JSON.parse(data).explanation);
            document.getElementById("demo").innerHTML = data
        });
    }).on("error", (err) => {

    });
}