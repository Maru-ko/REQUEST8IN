
import Express from "express";
// import { compareAsc, format } from 'date-fns'
// import Stuff from "stuff.js"
// const { v4: uuid } = require('uuid')
// format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// const eventEmitter = require('events')

const app = Express();
const port = 3001;
app.get("/", (req, res) => {
  res.send("nGrok4Life");
  // res.json(Stuff)
})



app.listen(port, () => console.log("we are listening on por" + port))