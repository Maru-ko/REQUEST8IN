const express = require('express')
<<<<<<< HEAD

const { v4: uuid } = require('uuid')
=======
>>>>>>> origin/main
const app = express();
const flash = require("express-flash")
app.set('view engine', 'pug')
app.use(express.static('static'))

<<<<<<< HEAD
=======

// app.use(express.urlencoded({
//   extended: true
// }))

>>>>>>> origin/main
const PORT = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.render('home'); 
});

<<<<<<< HEAD
app.get('/bin/:bin_id', (req, res) => { // 

});

app.get('/bin/:bin_id/view', (req, res) => {
  res.render('bin')
});

app.post('"/bin/:bin_id"', (req, res) => { 
  let bin = 'codetomakeabinGoeshere'
  // check if ID is in DB
  flash("OK!", "No errors I guess.");
  res.redirect(302, `/bin/${bin.id}/view`)
})


// app.post('/', (req, res) => {
// });

=======

>>>>>>> origin/main
app.listen(PORT, () => console.log("we are listening on port" + PORT))

