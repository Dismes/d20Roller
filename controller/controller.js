var express = require("express");


module.exports = function(app){

    app.get('/hi', function(req, res){
        var appear = {
            roll: 20
        }
        res.render("index", appear);
    })

    app.get("/", function(req, res){
        res.render("index");
    })
}