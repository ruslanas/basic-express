/* jshint node: true */

const express = require('express');
const mysql = require('mysql');
const validator = require('express-validator');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

const conf = require('./conf.json');

const app = express();

const connection = mysql.createConnection(conf.db);

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('basic', {
        title: "Hi!",
    });
});

const server = app.listen(conf.port, () => {
    console.log(server.address().address, server.address().port);
});