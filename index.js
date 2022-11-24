const express = require("express");
const port = 7000;
const app = express();
const db = require("./config/mongoose");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded());
app.use(express.static("assets"));
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.error;
    return;
  }
  console.log(`Running SucessFully on port: ${port}`);
});
