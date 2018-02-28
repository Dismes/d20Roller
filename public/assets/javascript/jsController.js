var d20 = require("./d20roller.js");

module.exports = {
    d20:d20,

}

d20.roll(5).then(function(res){console.log(res)});