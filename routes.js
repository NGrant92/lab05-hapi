const Donations = require('./app/controllers/donations');

//returns this info if called
module.exports = [
  {
    //METHOD = get, path = /, config = controller.js/index()
    method: 'GET', path: '/', config: Donations.home,
  },
];
