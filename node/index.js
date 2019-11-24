const express = require('express');
const bodyParser = require('body-parser')

const {mongoose} = require('./db.js');
var battleController = require('./controllers/battleController.js')

var app = express();
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors({origin: 'http://localhost:4200'}))


app.listen(3000,()=> console.log('Server startet at port : 3000'))



app.use('/', battleController)