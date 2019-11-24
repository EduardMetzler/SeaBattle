const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://testUser:testUser@test20-zpm8h.mongodb.net/seaBattleDB?retryWrites=true&w=majority',(err)=>{
    if(!err)
    console.log('MongoDB connection succeeded');
    else
    console.log('Error in DB connection :' + JSON.stringify(err,undefined,2))
})

module.exports = mongoose