const express = require('express');
const app = express();
const path = require('path');
const bp = require('body-parser');
app.use(express.urlencoded({extended: true}));
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use(express.static( path.join(__dirname, './../../public/dist/public')));
console.log(path.join(__dirname,  './../../public/dist/public'));
app.set('view engine', 'ejs');
module.exports = app;