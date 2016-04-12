'use strict';

var express = require('express');

var app = express();

app.get('/', function (request, response){
  response.send(
    {
      ipadress: request.headers['host'],
      language: request.headers['accept-language'].split(',')[0],
      software: request.headers['user-agent']
    }
  );

});

app.listen(3000, function(){
  console.log('Node listening on port 3000...');
});
