const Donations = require('./app/controllers/donations');
const Assets = require('./app/controllers/assets');
const SignUp = require('./app/controllers/signup');

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
    config: SignUp.home,
  }
];
