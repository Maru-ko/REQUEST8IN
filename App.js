const express = require('express')
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


app.listen(PORT, () => console.log("we are listening on port" + PORT))

