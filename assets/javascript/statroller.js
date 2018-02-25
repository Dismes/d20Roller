var roller = require ("./d20roller.js");

roller.roll(5).then(function(res, error){
    console.log(res);
});
