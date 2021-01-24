//パッケージの読み込み
const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.static('public'));  //静的ファイル(public)の読み込み

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/ask', (req, res) => {
    res.render('ask.ejs');
})

app.get('/signup', (req, res) => {
    res.render('signup.ejs');
});


app.get('/signin', (req, res) => {
    res.render('signin.ejs');
});

app.post('/signin', (req, res) => {

});

app.get('/inquiry', (req, res) => {
    res.render('inquiry.ejs');
});

app.get('/kiyaku', (req, res) => {
    res.render('kiyaku.ejs');
});

app.get('/pr', (req, res) => {
    res.render('pr.ejs');
});

app.get('/application', (req, res) => {
    res.render('application.ejs');
});

app.listen(3000);
