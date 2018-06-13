const express = require('express');
const request = require('request');
let app = express()

app.use(express.static('build'));
app.use('/', function(req, res) {
    console.log("proxying "+req.path);
    request("https://cams.cdn-surfline.com"+req.path).pipe(res);
});

app.listen(3000, console.log("Listening on port 3000!"));
