const cookieParser = require('cookie-parser');
const express = require('express');
const httpErrors = require('http-errors');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

require('./database/connection');

const commentRouter = require('./routes/comment/comController');
const feedRouter = require('./routes/feed/feedController');
const userRouter = require('./routes/user/userComtroller');
const heartRouter = require('./routes/heart/heartComtroller');

const app = express();

app.use(cors());

app.set('views', path.join(__dirname, 'views'));
// view engine setup
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false }, {limit: '50mb'}));
app.use(cookieParser());

let dir = path.join(__dirname, 'uploads');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/static', express.static(dir));
app.use('/users', userRouter);
app.use('/feeds', feedRouter);
app.use('/comments', commentRouter);
app.use('/hearts', heartRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
