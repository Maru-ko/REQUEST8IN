const express = require('express')
// const database = require('wherever the database is')

// const flash = require("express-flash")
  const { v4: uuid } = require('uuid')
const app = express();

app.set('view engine', 'pug')
app.use(express.static('static'))
app.use(express.json())


const PORT = 3003;

app.get('/', (req, res) => {
  res.status(200).render('home'); 
});

app.get('/bin/:bin_id', (req, res) => { // 
  const bin = `search 'database' for ${req.params.binID}`;
  if (bin) {
    res.status(200).render(`bin/${bin.id}`)
  } else {
    res.sendStatus(404).render('404') // or just show the appropriate bin
  }
});

app.get('/bin/:bin_id/view', (req, res) => {
  // No clue
  //res.render('bin')
});

app.post('"/bin/:bin_id"', (req, res) => { 

  let request;
      // check if req.ID is not in bin/DB
  if ('request not in bin') {
    request = 'code to add request to bin goes here'
    // flash("OK!", "No errors I guess.");
    res.status(301).redirect(`/bin/${req.id}/view`)
  } else {
    // display error 
    res.status(400).render('home');
  }
})

app.post('/', (req, res) => {
  //replace with call to database module to create a bin
  let newBinId = Math.floor(Math.random()*1000000)

  res.json({newBinId})
});

app.listen(PORT, () => console.log("we are listening on port" + PORT))