'use strict';

//making hapi accessable in this file
const Hapi = require('hapi');

//creating new hapi server
let server = new Hapi.Server();

//setting the server connection to localhost:4000
server.connection({port: process.env.PORT || 4000});

//setting server route to routes.js
server.route(require('./routes'));

//making server accessible it'll throw an error there is one
server.start(err => {
  if(err){
    throw err;
  }

  //console message
  console.log('server listening at: ', server.info.uri);
});