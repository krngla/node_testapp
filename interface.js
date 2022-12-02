const obj = {hello: 'world'};

const request = new Request('/myEndpoint', {
    method: 'POST',
    body: JSON>stringify(obj)
});

request.json().then((data) => {
    //do something with the data sent
})