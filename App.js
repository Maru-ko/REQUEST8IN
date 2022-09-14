const express = require('express')
// const router = express.Router();
// const { v4: uuid } = require('uuid')
const app = express();
app.set('view engine', 'pug')
app.use(express.static('static'))

// app.use(express.urlencoded({
//   extended: true
// }))
const PORT = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.render('home')
});

app.get('/bin/:bin_id', (req, res) => {
  // res.render('bin')
});

app.get('/bin/:bin_id/view', (req, res) => {
  // res.render
});

app.post('/', (req, res) => {
  const user = new User({
      username: req.body.username,
      password: req.body.password
  });

  user.save()
  .then(data => {
      res.json(data);
  })
  .catch(err => {
      res.json({message: err})
  })
})

app.post('/bin/:bin_id', (req, res) => {

});
app.listen(PORT, () => console.log("we are listening on port" + PORT))
