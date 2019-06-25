const jsonServer = require('json-server');
var express = require('express');
const path = require('path');
var server = express();

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + `index.html`)); // load the single view file (angular will handle the page changes on the front-end)
});
server.listen(port);

