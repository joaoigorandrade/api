const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");
const app = express();

app.use(bodyParser.json()); // application/json
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use("/", routes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(8080, () => {
  {
    console.log("App Running");
  }
});
