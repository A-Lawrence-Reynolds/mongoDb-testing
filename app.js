const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const postRoute = require('./routes/post');
app.use(express.json());
app.use('/posts', postRoute);




mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true },() => console.log('connected to database'));

app.listen(3300)


