const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/error.middleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api/goals', require('./routs/routs'))
app.use(errorHandler)
app.listen(port, () =>
 console.log(`Server started on port ${port}`.bgBrightMagenta)
);

