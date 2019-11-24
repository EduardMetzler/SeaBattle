const mongoose = require('mongoose');

var Battle = mongoose.model('Battle',{
    // player1:{type:String},
    // player2:{type:String}

    
        player1: {type:Object},
        player2: {type:Object},
        id:{type:String}
      
      
      

});


module.exports = {Battle}



// const mongoose = require('mongoose');

// var Battle = mongoose.model('Battle',{
//     name:{type:String}
// });


// module.exports = {Battle}