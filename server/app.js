const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let index = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', index);

let port = 3000;
app.listen(port);
console.log(`listening to port ${port}`);
