var cfg = require('../config.js')
var express = require('express');
var router = express.Router();

module.exports = function (io) {
    var todo = io.of('/')
    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('todo', { 
    	  title: 'ToDo',
    	  year: cfg.year,
    	  version: cfg.version
      });
    });
    todo.on('connection', function (socket) {
        console.log('User has connected to ToDo')
		socket.on('task', function (data) {
			// call data parse and file write functions on data. Log data for now.
			console.log(data)
		})
    })
    return router
}

