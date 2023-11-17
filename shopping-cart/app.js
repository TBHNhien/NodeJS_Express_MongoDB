var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup

// app.engine('.hbs',expressHbs({defaulLayout:'layout',extname:'.hbs'}));
// app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "layout"}));
// app.set('view engine', 'hbs');

// const express = require('express');

const engine = require('express-handlebars');

// const app = express();
var handlebars = engine.create({
    defaultLayout: 'layout',
    extname: '.hbs'
});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);

module.exports = app;
