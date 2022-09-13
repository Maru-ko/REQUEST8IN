const express = require('express')
const app = express();
app.set('view engine', 'pug')
app.use(express.static('static'))

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('home')
});

app.get('/bin/:bin_id', (req, res) => {
  res.render('home')
});

app.get('/bin/:bin_id/view', (req, res) => {

});

app.post('/', (req, res) => {

});

app.post('/bin/:bin_id', (req, res) => {

});

app.listen(PORT, () => console.log("we are listening on por" + PORT))