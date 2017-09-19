const Donations = require('./app/controllers/donations');
const Assets = require('./app/controllers/assets');

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
  }
];
