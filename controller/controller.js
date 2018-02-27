var express = require("express");

var router = express.Router();


router.get("/hi", function(req, res){
    body = {
        roll: 20,
    }
    res.render("index")
})

router.get("/", function(req, res){
    res.render("index")
})

module.exports = router;