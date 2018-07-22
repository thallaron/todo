var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks');
var favicon = require('serve-favicon');

var app = express();
app.io = require('socket.io')();

var todoRouter = require('./routes/todo')(app.io);

// view templating engine setup
nunjucks.configure(path.join(__dirname, 'public/views'), {
    autoescape: true,
    express: app
});
app.set('view engine', 'njk');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', todoRouter);

// catch 404 and forward to error handler                                                                 
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

