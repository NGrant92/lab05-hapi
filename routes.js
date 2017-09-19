const Controller = require('./controller.js');

//returns this info if called
module.exports = [
  {
    //METHOD = get, path = /, config = controller.js/index()
    method: 'GET', path: '/', config: Controller.index
  }
];