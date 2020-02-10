var express = require('express');
var app = express();
const port = 8089;



// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});

// listen port
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
