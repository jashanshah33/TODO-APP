const express = require("express");
const port = 7000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/", require("./routes"));
app.use(express.static("assets"));

app.listen(port, function (err) {
  if (err) {
    console.error;
    return;
  }
  console.log(`Running SucessFully on port: ${port}`);
});
