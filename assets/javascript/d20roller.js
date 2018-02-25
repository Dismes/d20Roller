
var roll = function(maxAmount){
    return Promise.resolve(Math.floor(Math.random() * Math.floor(maxAmount)) + 1);
    
}

// var roll = function(maxAmount){
//     return new Promise(
//         function(res, err){
//             res(Math.floor(Math.random() * Math.floor(maxAmount)) + 1)
//         }
//     )
// }

module.exports = {roll};
