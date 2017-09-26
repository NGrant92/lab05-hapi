'use strict';

exports.main = {
  auth: false,
  handler: function (request, reply) {
    reply.view('main', { title: 'Welcome to Donations' });
  },
};

exports.signup = {
  auth: false,
  handler: function (request, reply) {
    reply.view('signup', { title: 'Sign up for Donations' });
  },
};

exports.login = {
  auth: false,
  handler: function (request, reply) {
    reply.view('login', { title: 'Login to Donations' });
  },
};

exports.logout = {
  auth: false,
  handler: function (request, reply) {
    request.cookieAuth.clear();
    reply.redirect('/');
  },
};

exports.authenticate = {
  auth: false,
  handler: function (request, reply) {
    const user = request.payload;
    if ((user.email in this.users) && (user.password === this.users[user.email].password)) {
      request.cookieAuth.set({
        loggedIn: true,
        loggedInUser: user.email,
      });
      reply.redirect('/home');
    } else {
      reply.redirect('/signup');
    }
  },
};

exports.userRegister = {
  auth: false,
  handler: function (request, reply) {
    const user = request.payload;
    this.users[user.email] = user;
    reply.redirect('/login');
  },
};

exports.viewSettings = {
  handler: function (request, reply) {
    const userEmail = request.auth.credentials.loggedInUser;
    console.log(this.currentUser);
    reply.view('settings', {
      title: 'User Settings',
      user: this.users[userEmail],
    });
  },
};

exports.updateSettings = {
  handler: function (request, reply) {
    this.users[request.auth.credentials.loggedInUser] = request.payload;
    reply.redirect('/settings');
  },
};
