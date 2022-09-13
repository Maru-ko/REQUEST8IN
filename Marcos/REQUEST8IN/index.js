
import Express from "express";

const app = Express();
const port = 3001;
app.get("/", (req, res) => {
  res.send("nGrok4Life");
})

app.listen(port, () => console.log("we are listening on por" + port))