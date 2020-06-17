const express = require('express')

const app = express()
const port = 7899

app.get('/', function(req, res){
    console.log("--------- request information is as follows ---------");
    console.log(req);
    console.log("-----------------------------------------------------");
    res.send("response is here");
});

app.post('/', function(req, res) {
    console.log("--------- request information is as follows ---------");
    console.log(req);
    console.log("-----------------------------------------------------");
    console.log(res);    
});

console.log(`listing to port: ${port}`);
app.listen(port)