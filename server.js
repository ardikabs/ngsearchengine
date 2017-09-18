
const express = require('express');
const app = express();
const path = require('path');
const request = require('request');

app.use(express.static(__dirname+"/dist"));

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.post('/getToken',function(req,res){
    var client_id ='ca8d5e60f7874a76b8497953bf16a0a7';
    var client_secret ='f3e4b0d819444de69a4789ff29293c46';
    var options = {
        url:'https://accounts.spotify.com/api/token',
        headers:{
            'Authorization': 'Basic '+ (new Buffer(client_id + ':' + client_secret.toString('base64'))),
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        form: {
            grant_type: 'client_credentials'
          },
        json: true
    }

    request.post(options, function(error, response, body){
        if (!error && response.statusCode === 200) {
            // use the access token to access the Spotify Web API
            var token = body.access_token;
            console.log(token);
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({'token':token}));
        }
    });

})

app.listen(process.env.PORT || 8080);


console.log('Console Listening in '+process.env.PORT || 8080);