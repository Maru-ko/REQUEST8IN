const express = require('express')
const app = express();
app.set('view engine', 'pug')
app.use(express.static('static'))

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('home')
});






app.listen(PORT, () => console.log("we are listening on por" + PORT))