
const express = require('express');
const router = express.Router();
const path = require('path');
const request = require('request');

router.get('/',function(req,res){
    res.send('API Works');
});

router.get('/access_token',function(req,res,next){
    var client_id ='ca8d5e60f7874a76b8497953bf16a0a7';
    var client_secret ='f3e4b0d819444de69a4789ff29293c46';
    var authOptions = {
        url:'https://accounts.spotify.com/api/token',
        headers:{
            'Authorization': 'Basic Y2E4ZDVlNjBmNzg3NGE3NmI4NDk3OTUzYmYxNmEwYTc6ZjNlNGIwZDgxOTQ0NGRlNjlhNDc4OWZmMjkyOTNjNDY=',
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        form: {
            grant_type: 'client_credentials'
          },
        json: true
    };

        
    request.post(authOptions, function(error, response, body){
        if (!error && response.statusCode === 200) {
            // use the access token to access the Spotify Web API
            var token = body.access_token;
            res.json({'access_token':token});
        }
    });
});

module.exports = router;
