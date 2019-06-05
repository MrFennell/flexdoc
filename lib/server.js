const http = require('http');
const express= require('express');
const server = express();

server.use(express.static('public'));
//allow other modules to use server
module.exports= server;