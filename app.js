const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const categoryRouter = require('./api/routers/categories');

mongoose.connect('mongodb://localhost:27017/evaluasi');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/categories', categoryRouter);

app.use((req, res, next) => {
    console.log("Server is Running...");
    res.status(200). json ({
        message: "Hello, I'm Learning NodeJS"
    });
});

module.exports = app;