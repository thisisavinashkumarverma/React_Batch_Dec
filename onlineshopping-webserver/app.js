var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var validateCredentialsRouter = require("./routes/validateUserCredentials");
var productDetailsRouter = require("./routes/getProductDetails");
var getProductsByIdsRouter = require("./routes/getProductsByIds");
var isUserLoggedinRouter = require("./routes/isUserLoggedin");
var getSessionDetailsRouter = require("./routes/getSessionDetails");
var logoutSessionRouter = require("./routes/logoutSession");
const { createClient } = require('redis');
const { RedisStore } = require('connect-redis');
const mongoose = require('mongoose');
const {MongoStore} = require('connect-mongo');
const mongoUrl = 'mongodb://localhost:27017/mySessionDB';
mongoose.connect(mongoUrl);



var app = express();
const allowedOrigins = ['http://localhost:5173','http://localhost:5174', 'https://www.example.com']; // Replace with your frontend URLs

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests) or from the allowed list
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  credentials: true // Enable to allow cookies/auth tokens to be sent
};

app.use(session({
  secret: 'keyboard catsakfjhalkjfhalk',
  // resave: true,
  // saveUninitialized: false,
   cookie: {
    originalMaxAge: 1000000,
    secure: false // secure indicates whtehr its http|https server false is for http, true is for https
  }  
}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors({
  origin: ['http://localhost:5173', 'http://domain2.com'], // Specific allowed origins
  credentials: true // Enable the receipt of cookies
}));
app.use(cookieParser());
app.use(session({
 store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/mySessionDB',
    collectionName: 'sessions', // Sessions will be stored in this collection
    ttl: 14 * 24 * 60 * 60      // Session expiration (14 days)
  }),
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  name: 'my-session-id', 
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true,              // Prevents JS access to cookie (Security)
    secure: true,                // Required for sameSite: 'none' (Requires HTTPS)
    sameSite: 'none'             // Allows cross-site cookie usage
  }
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/validate/userCredentials", validateCredentialsRouter);
app.use('/get/product/details', productDetailsRouter);
app.use('/api/products/getProductsByIds', getProductsByIdsRouter);
app.use('/isUserLoggedIn', isUserLoggedinRouter);
app.use("/get/userSessionDetails", getSessionDetailsRouter);
app.use("/logoutSession", logoutSessionRouter);
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
