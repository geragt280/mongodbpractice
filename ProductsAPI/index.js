const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.get(`/`, (req, res) => {
    res.send('Hello World.');
});

app.get(`/api/products`, (req, res) => {
    res.send([1, 2, 3]);
});

app.get(`/api/products/:id`, (req, res) => {
    res.send(req.params.id);
});


mongoose.connect(process.env.DATABASE_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (err)=> { 
    if(err){
        console.log('Error connecting:', err);
    }
    else{
        console.log('connected to database.');
    }
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});