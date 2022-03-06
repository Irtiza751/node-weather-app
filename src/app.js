const express = require("express");
const path = require("path");
const hbs = require("hbs");

// Initializing app
const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  if (!req.query.search) {
    return res.render("index.hbs", {
      title: "Weather",
      name: "Muhammad Irtiza",
      message: "Please provide a valid search term",
    });
  }

  res.render("index.hbs", {
    title: "Weather",
    name: "Muhammad Irtiza",
    message: req.query.search,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Muhammad Irtiza",
  });
});

app.get("/help", (req, res) => {
  res.render("help.hbs", {
    title: "Help",
    name: "Muhammad Irtiza",
  });
});

// 404
app.get("*", (req, res) => {
  res.render("404.hbs", {
    title: "404",
    name: "Muhammad Irtiza",
  });
});

app.listen(3000, () => {
  console.log("Serve is running on port 3000");
});
