const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const prdRoute = require('./routes/product');
const addPrdRoute = require('./routes/add-product');
const errorRoute = require('./routes/404');

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(addPrdRoute);
app.use(prdRoute);
app.use(errorRoute);

app.listen(3000)