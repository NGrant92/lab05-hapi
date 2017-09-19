'use strict';

exports.home = {

  handler: (request, reply) => {
    reply.file('./app/views/signup.html');
  },
};