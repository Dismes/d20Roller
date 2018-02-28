var express = require("express");
var roll = require("../public/assets/javascript/jsController.js")


module.exports = function(app){

    app.get('/hi', function(req, res){
        var array = [1,2,3,4]
        var appear = {
            roll: array
        }
        res.render("index", appear);
    })

    app.get('/rolld/:id', function(req, res){
        rollthis = req.params.id;
        roll.d20.roll(rollthis).then(function(response){
            test = {
                roll : response,
            }
            
            res.render("index", test);
        });

        

    })

    app.get("/", function(req, res){
        res.render("index");
    })
}