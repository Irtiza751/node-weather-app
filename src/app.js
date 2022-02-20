const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

// define paths for express config
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../tamplates/partials");

// setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to save
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.render("index.hbs", {
    title: "Weather",
    name: "Muhammad Irtiza",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Muhammad Irtiza",
  });
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
