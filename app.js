const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// import routes
const postsRoutes = require('./routes/posts')

app.use('/posts', postsRoutes)

// routes
app.get('/', (req, res) => {
    res.send('we are on homee')
});


// connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, 
() => console.log('connected to DB'))

// starts listening
app.listen(3000);