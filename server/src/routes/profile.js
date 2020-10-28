const express = require('express');
const db = require('../config/dbFiles/profile');



const router = express.Router(); 

router.get('/' , async(req, res, next) =>{
    
try {
    let results = await db.all();
    res.json(results);

} catch(err) {
    console.log(err);
    res.sendStatus(500);
}

});

router.get('/:id' , async(req, res, next) =>{
    
    try {
        let results = await db.one(req.params.id);
        res.json(results);
    
    } catch(err) {
        
        console.log(err);
        console.log('test');
        res.sendStatus(500);
    }
    
    });




module.exports = router;