require('dotenv').config();
const express = require('express');
const database = require("./data/Data");
const { v4: uuid } = require('uuid');
const app = express();
// const flash = require("express-flash")
// const { addRequest, createBin } = require('./data/configs/Data');

app.set('view engine', 'pug')
app.use(express.static('static'))

const PORT = 3003;
const hostname = process.env.HOST;

app.get('/', (req, res) => {
  res.status(200).render('home', {hostname}); 
});

app.get('/bin/:bin_id/view', async (req, res) => {
  let bin_id = req.params.bin_id;
  const binExists = await database.binExists(bin_id);
  if (binExists) {
    const reqs = await database.getRequests(bin_id);
    res.render('bin', {
      binid:bin_id,
      reqs,
      hostname
    });
  } else {
    res.redirect('/');
  }
});

//adds a request to a bin if the bin exists
app.get('/bin/:bin_id', async (req, res) => { // 
 const binExists = await database.binExists(req.params.bin_id);

  if (binExists) {
    await database.addRequest(req.params.bin_id, req) // we may need to add a error handling || if the db update does not succeed
    res.sendStatus(201);
  } else {
    res.sendStatus(404);
  }
});

//adding post requests to a bin
app.post('/bin/:bin_id/', async (req, res) => { 
  const binExists = await database.binExists(req.params.bin_id);
  
  if (binExists) {
    await database.addRequest(req.params.bin_id, req)
    res.sendStatus(201);
  } else {
    res.sendStatus(404);
  }
})

//create a new bin and return its newbinID as json
app.post('/', async (req, res) => {
  let newBin = await database.createBin(req)
  res.json({ newBin })
});

app.get('*', async (req, res) => {
  res.redirect('/');
});

app.post('*', async (req, res) => {
  res.redirect('/')
});

app.listen(PORT, () => console.log("we are listening on port" + PORT))