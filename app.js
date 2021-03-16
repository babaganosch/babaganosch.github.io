const express = require('express');
const app = new express();

app.use(express.static(__dirname + "/_site/"));
app.get('/', function(request, response){
    response.sendFile("index.html");
});

app.listen(3000);