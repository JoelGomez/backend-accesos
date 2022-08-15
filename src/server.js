const express = require('express');
const morgan = require('morgan');

const server = express();

server.set('port', 4000);
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/accesos', require('./routes/accesos.routes'));

module.exports = server;