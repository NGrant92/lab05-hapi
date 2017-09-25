const Donations = require('./app/controllers/donations');
const Assets = require('./app/controllers/assets');
const SignUp = require('./app/controllers/signup');
const Login = require('./app/controllers/login');

//returns this info if called
module.exports = [
  {
    method: 'GET',
    path: '/',
    config: Donations.home,
  },
  {
    method: 'GET',
    path:'/{param*}',
    config: { auth:false },
    handler: Assets.servePublicDirectory,
  },
  {
    method: 'GET',
    path: '/signup',
    config: Donations.signup,
  },
  {
    method: 'GET',
    path: '/login',
    config: Donations.login,
  }
];
