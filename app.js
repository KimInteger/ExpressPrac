const express = require('express');

const handler = require('express-handlebars');

const http = require('node:http');

const fs = require('node:fs');

const path = require('node:path');

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/',(req,res)=>{
  res.type('text/plain');
  res.send('hello Express');
});

app.get('/about',(req,res)=>{
  res.type('text/plain');
  res.send('You know? this is new Experience');
});



app.use((req,res)=>{
  res.type('text/plain');
  res.status(404);
  res.send('404 Not Found');
});

app.use((err,req,res,next)=>{
  console.error(err.message);
  res.type('text/plain');
  res.status(500);
  res.send('500 Server error');
});

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
});