'use strict';

const express = require('express'), 
			path = require('path'), 
			favicon = require('serve-favicon'), 
			logger = require('morgan'), 
			http = require('http'), 
			cookieParser = require('cookie-parser'), 
			bodyParser = require('body-parser'), 
			routes = require('./routes/index'), 
      socket = require('./config/socketio/chatServidor'),  
			app = express(), 
			server = http.createServer(app),
      io = require('socket.io').listen(server);

//init config server express
app.set('port', process.env.PORT || 3000);
//init socket server
socket(io);
//bower components
//componentes 
app.use(express.static(__dirname + '/bower_components'));

//express configuration
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//config outes
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Page Not Found, We Sorry :(');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

/**
 * create server with express
 * @param  {[type]} ){} [description]
 * @return {[type]}       [description]
 */
server.listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});
