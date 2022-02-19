const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send([{ name: "Muhammad Irtiza" }, { name: "Asher khan" }]);
});

app.get("/about", (req, res) => {
  res.send("<h1>This is the about route.</h1>");
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Today is a bueautyfull day",
    location: "Pakistan",
  });
});

app.listen(3000, () => {
  console.log("Serve is running on port 3000");
});
