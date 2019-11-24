const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId

var {Battle} = require('../models/battle')

// router.get('/',(req,res)=>{
//     Battle.find((err,docs)=>{
//         if(!err) {res.send(docs);}
//         else {console.log('Error in Retriving :' + JSON.stringify(err,undefined,2))}
//     })
// })




router.post('/',(req,res)=>{
    console.log(req.body._id)
 Battle.findOne({_id:`${req.body._id}`},(err,doc)=>{
     if (err){ res.status(400).send(err);}
    // if (err){ console.log(user)}
    // else if (!err){console.log(doc)}

     else if (!err){res.send(doc);}
 })
})



router.put('/',(req,res)=>{
    // if(!ObjectId.isValid(req.params.id))
    // return res.status(400).send(`No record id : ${req.params.id}`)
    Battle.findOne({player2:{id:''}}, (err, user)=>{
        // console.log('eeeeeeeeeeeeee')
        // Battle.findOne({player2:''}, (err, user)=>{
        if (err) {
         res.status(400).send(err);
        } else if (!user) {
            console.log(req.body.myId)

            // var emp = new Battle({
            //     player1: req.body.myId,
            //     player2: ""
        
            // })

               var emp = new Battle({
                player1: {id:req.body.myId},
                player2: {id:""}
        
            })
        
            emp.save((err,doc)=>{
                // console.log(doc)
                if(!err) {res.send(doc);}
                else {console.log('Error in Battle Save :' + JSON.stringify(err,undefined,2))}
            })


        //  res.status(404).send(err);
        } else {
            // console.log(user._id)
            // var emp = {
  
            //     player2:req.body.myId
            // }

               var emp = {
  
                player2: {id:req.body.myId},
            }
        
        
        
            Battle.findByIdAndUpdate( user._id, {$set:emp},{new:true},(err,doc)=>{
                if(!err) {res.send(doc);}
                else {console.log('Error in Battle Save :Update' + JSON.stringify(err,undefined,2))}
            })
        //  res.status(200).send(user);
        }
    });



})




module.exports = router






// const express = require('express');
// var router = express.Router();
// var ObjectId = require('mongoose').Types.ObjectId

// var {Battle} = require('../models/battle')

// router.get('/',(req,res)=>{
//     Battle.find((err,docs)=>{
//         if(!err) {res.send(docs);}
//         else {console.log('Error in Retriving :' + JSON.stringify(err,undefined,2))}
//     })
// })

// router.get('/:id',(req,res)=>{
//     if(!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record id : ${req.params.id}`)

//     Battle.findById(req.params.id,(err,doc)=>{
//         if(!err) {res.send(doc);}
//         else {console.log('Error :' + JSON.stringify(err,undefined,2))}
//     })
// })

// router.post('/',(req,res)=>{
//     var emp = new Battle({
//         name: req.body.name
//     })

//     emp.save((err,doc)=>{
//         console.log(doc)
//         if(!err) {res.send(doc);}
//         else {console.log('Error in Battle Save :' + JSON.stringify(err,undefined,2))}
//     })
// })

// router.put('/:id',(req,res)=>{
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send(`No record id : ${req.params.id}`)

//     var emp = {
//         name:req.body.name
//     }

//     Battle.findByIdAndUpdate(req.params.id, {$set:emp},{new:true},(err,doc)=>{
//         if(!err) {res.send(doc);}
//         else {console.log('Error in Battle Save :Update' + JSON.stringify(err,undefined,2))}
//     })
// })

// router.delete('/:id', (req,res)=>{
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send(`No record id : ${req.params.id}`)

//     Battle.findByIdAndRemove(req.params.id,(err,doc)=>{
//         if(!err) {res.send(doc);}
//         else {console.log('Error in Battle Save :Update' + JSON.stringify(err,undefined,2))}
//     })
// })



// router.get('/', (req, res) =>{
//     Battle.findOne({name:'d'}, (err, user)=>{
//       if (err) {
//        res.status(400).send(err);
//       } else if (!user) {
//        res.status(404).send(err);
//       } else {
//        res.status(200).send(user);
//       }
//     });
//    });




// module.exports = router