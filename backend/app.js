var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var annivsRouter = require("./routes/annivs");


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/annivs", annivsRouter);



app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dbName = 'projectWeb';  // Nom de notre BDD
const dbUrl = `mongodb://127.0.0.1:27017/${dbName}`;

// On se connecte à la base de donnée
mongoose.connect(dbUrl, {
  useNewUrlParser: true
});


module.exports = app;
