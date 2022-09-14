
import Express from "express";
// import Stuff from "stuff.js";
//const Express = require('express');
const app = Express();
const port = 3003;
app.get("/", (req, res) => {
  res.send("nGrok4Life");
  // res.json(Stuff)
})

app.listen(port, () => console.log("we are listening on por" + port))
