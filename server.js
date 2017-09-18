
const express = require('express');
const app = express();
const path = require('path');
const api = require('./server/routes/api');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname+"/dist"));

app.use('/api',api);

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.listen(port);


console.log('Console Listening in '+ port);