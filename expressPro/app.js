var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mockRouter = require('./routes/mock');  //mock路由

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*my_code:解决跨域问题，注意要放到一级路由的上面*/
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");//项目上线后改成页面的地址
  next();
});
/*一级路由*/
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mock', mockRouter); //一级路由，请求以mock开头就找router/mock.js二级路由

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
