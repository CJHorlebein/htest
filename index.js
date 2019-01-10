const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require("path");
//to parse form data

const bodyParser = require("body-parser");
const host = "0.0.0.0";
const port = process.env.PORT || 3000;

//setting view engine and where to find views
app.set("view engine", "ejs");
app.set("views", "app/views");

// for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("app"));

app.get("/", function(req, res, next) {
    // res.send("I'm the home page");
    res.render("index");
});

app.listen(port, host, () => {
    console.log(`Starting app on ${port}`);
});
