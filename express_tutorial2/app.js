const express = require('express');
const morgan = require('morgan');

const indexRouter = require('./routes/');
const loginRouter = require('./routes/login');
const joinRouter = require('./routes/join');

const app = express();

const customMiddleWare = function(req, res, next) {
    console.log(`요청 url: ${req.url} , http 메소드: ${req.method}`);
    next();
};

app.use(morgan('dev'));
app.use(express.json());

app.use(customMiddleWare);
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/join', joinRouter);



app.listen('8081', () => {
    console.log("8081 포트에서 서버 실행중!");
});