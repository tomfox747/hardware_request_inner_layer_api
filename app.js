const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const healthCheck_router = require('./routers/healthCheck');
const data_post_router = require('./routers/data_post_router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/healthCheck', healthCheck_router);
app.use('/inner/data', data_post_router);

module.exports = app;