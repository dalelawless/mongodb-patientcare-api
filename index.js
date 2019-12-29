const connection = require("./models");
const express = require("express");
const application = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

application.use(bodyParser.urlencoded({
    extended : true
}));

// set up views folder
application.set('views', path.join(__dirname, "/views/"));

// handle bars set up
application.engine("hbs", expressHandlebars({
    extname : "hbs",
    defaultLayout : "mainLayout",
    layoutsDir : __dirname + "/views/layouts"
}));

application.set("view engine","hbs");

// set up endpoint
application.get("/", (request, response) => {
    //response.send('<h1>Hello World<h1>')
    response.render("index", {});
});

application.listen("3000", () => {
    console.log("Server started");
});