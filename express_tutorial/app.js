const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res, next) => {
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.end("Error!");
        } else {
            res.end(data);
        }
    });
    // res.end("Hello Express!");
});

app.get('/login', (req, res, next) => {
    fs.readFile('./login.html', (err, data) => {
        if (err) {
            res.end("Error");
        } else {
            res.end(data);
        }
    });
});

app.post('/login', (req, res, next) => {
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    if (userid === "dsckmou" && userpw === "1234") {
        res.status(201).end("로그인 성공!");
    } else {
        res.status(404).end("로그인 실패!");
    }
});


app.listen('8001', () => {
    // 내용
    console.log("8001번 포트에서 서버가 실행중입니다 !!");
});