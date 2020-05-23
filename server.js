const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    return res.render("home", { recipes: recipes })
})

server.get("/about", function (req, res) {
    return res.render("about")
})

server.get("/recipes", function (req, res) {
    return res.render("recipes", { recipes: recipes })
})

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = recipes[recipeIndex];
    
    if (!recipes) {
        return res.render("not-found")
    }

    return res.render("recipe", { recipes: recipe })
})

server.use(function (req, res) {
    return res.status(404).render("not-found");
})

server.listen(8080, function () {
    console.log("Server is Running")
})