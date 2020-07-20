require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
const lastmiddleware = require('./middlewares/LastMiddleware');

app.use(express.json());
app.use(routes);


app.use(lastmiddleware);
module.exports = app;