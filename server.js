
const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "south-pacific-engineering",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us",
  });
});

app.get("/projects", (req, res) => {
  res.render("projects", {
    title: "Our Projects",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Us | South-Pacific Engineering Ltd",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
