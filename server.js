//Dependencies
const express = require("express");
const path = require("path")

const hbars = require("express-handlebars");
const ouRoutes = require("./controllers/ou_controller")

const PORT = process.env.PORT || 8080;

//Start server
const app = express();

//Express assets config
app.use(express.static(path.join(__dirname, "public")));

//Express post config
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Handlebars config
app.engine("handlebars", hbars({ defaultLayout: "main"}));
app.set("view engine", "handlebars")

app.use(ouRoutes)

app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})