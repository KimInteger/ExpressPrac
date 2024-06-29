const express = require('express');

const handler = require('express-handlebars');

const http = require('node:http');

const fs = require('node:fs');

const path = require('node:path');

const PORT = process.env.PORT || 8080;

const app = express();

// 핸들바 뷰 엔진 설정
app.engine('handlebars',handler({
  defalutLayout: 'main'
}))

app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{res.render('home')});

app.get('/about',(req,res)=>{res.render('about')});



app.use((req,res)=>{
  res.status(404);
  res.render('404');
});

app.use((err,req,res,next)=>{
  console.error(err.message);
  res.status(500);
  res.render('5001')
});

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
});