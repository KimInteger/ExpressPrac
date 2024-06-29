const express = require('express');

const handler = require('express-handlebars');

const http = require('node:http');

const fs = require('node:fs');

const path = require('node:path');

const PORT = process.env.PORT || 8080;

const app = express();


const fortunes = [
  "Conquer your fears or they will conquer you",
  "These are the nights will never die",
  "My father told me",
  "When I was just a child",
  "My enenmy"
];

// 핸들바 뷰 엔진 설정
app.engine('handlebars',handler({
  defalutLayout: 'main'
}))

app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{res.render('home')});

app.get('/about',(req,res)=>{
  const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
  res.render('about',{fortune: randomFortune});
});



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