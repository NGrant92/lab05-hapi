'use strict';

exports.main = {

  handler: function (request, reply) {
    reply.view('main', { title: 'Welcome to Donations' });
  },
};

exports.signup = {

  handler: function (request, reply) {
    reply.view('signup', { title: 'Sign up for Donations' });
  },
};

exports.login = {

  handler: function (request, reply) {
    reply.view('login', { title: 'Login to Donations' });
  },

};

exports.authenticate = {

  handler: function (request, reply) {
    let isRegistered = false;
    const logInfo = request.payload;
    for (let x in this.users) {
      if (logInfo.email === this.users[x].email && logInfo.password === this.users[x].password) {
        isRegistered = true;
        this.currentUser = this.users[x];
        break;
      }
    }
    if (isRegistered) {
      this.currentUser = logInfo;
      reply.redirect('/home');
    }
    else {
      reply.redirect('/');
    }
  },

};

exports.logout = {

  handler: function (request, reply) {
    reply.redirect('/');
  },

};

exports.userRegister = {

  handler: function (request, reply) {

    const newUser = request.payload;
    this.users.push(newUser);
    console.log(this.users);
    this.currentUser = newUser;

    reply.redirect('/home');
  },

};
