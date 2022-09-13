// import ReactDOM from 'react-dom/client'
// import App from './App'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)


import Express from "express";
const app = Express();
app.set('view engine', 'pug')
app.use(Express.static('static'))

const PORT = process.env.PORT || 3000;

// app.get('^/$|index(.html)?', (req, res) => {
app.get('/', (req, res) => {

  res.render('home')

});

// app.get('/*', (req, res) => {

// })




app.listen(PORT, () => console.log("we are listening on por" + PORT))