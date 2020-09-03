
//Pulling NPM Dependencies
var express = require("express")

var path = require("path")

// SET UP of EXPRESS
var app = express()

var PORT = 6900


// SERVES


// Get homepage
app.get("/", function(req, res){

    res.sendFile(path.join( __dirname, "index.html"))

})

// Get JS
app.get('/index.js', function(req, res){

    res.sendFile(path.join(__dirname, "/assets/js/index.js"))

})

// Redirect to notes page
app.get('/notes', function(req, res){

    res.sendFile(path.join(__dirname, "notes.html" ))

})



// Start Server
app.listen(PORT, function(){

    console.log("Server listening on port:"+ PORT)

})






