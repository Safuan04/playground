const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();


logger.on('messageLogged', function(arg) {
  console.log('Listener called', arg);
});

logger.log('message')
