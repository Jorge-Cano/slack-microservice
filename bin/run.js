'use strict'

const service = require('../server/service');
const http = require('http');

const server = http.createServer('service');
server.listen(7000);

server.on('listening', function(){
  console.log(`Slack-Microservice is listening on ${server.address().port} in ${service.get('env')} mode.`);
});
