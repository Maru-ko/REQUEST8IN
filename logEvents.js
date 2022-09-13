// const express = require('express');
import Express from "express";
const app = Express();
  // const path = require('path')
const PORT = process.env.PORT || 3000;

app.get('^/$|index.html', (req, res) => {
  // res.send('hey')
  //  res.sendFile('./views/home.pug', { root: __dirname});
  // res.sendFile('./views/home.pug', { root: __dirname});
  // rest.sendFile(path.join(__dirname, 'views', 'home.pug' ))
});

// import Express from "express";
// import { compareAsc, format } from 'date-fns'
// import Stuff from "stuff.js"
// const { v4: uuid } = require('uuid')
// format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// const eventEmitter = require('events')

// const app = Express();
// const port = 3001;
// app.get("/", (req, res) => {
//   res.send("nGrok4Life");
//   // res.json(Stuff)
// })



app.listen(PORT, () => console.log("we are listening on por" + PORT))g(uuid())
