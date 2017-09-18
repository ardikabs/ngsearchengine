
const express = require('express');
const router = express.Router();
const path = require('path');
const request = require('request');

router.get('/',function(req,res){
    console.log('Masuk API');
    res.send('API Works');
});

router.post('/access_token',function(req,res,next){
    var client_id ='ca8d5e60f7874a76b8497953bf16a0a7';
    var client_secret ='f3e4b0d819444de69a4789ff29293c46';
    var authOptions = {
        url:'https://accounts.spotify.com/api/token',
        headers:{
            'Authorization': 'Basic '+ (new Buffer(client_id + ':' + client_secret.toString('base64'))),
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        form: {
            grant_type: 'client_credentials'
          },
        json: true
    };

    request(authOptions).pipe(res);
    console.log(res);    
    // request.post(authOptions, function(error, response, body){
    //     console.log("Sedang REQUEST ");        
    //     if (!error && response.statusCode === 200) {
    //         // use the access token to access the Spotify Web API
    //         var token = body.access_token;
    //         console.log("Iki Token Nak Njero-> "+token);
    //     }
    // }).pipe(res);
    res.json();
});

module.exports = router;
