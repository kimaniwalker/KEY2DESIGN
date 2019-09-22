const express = require('express');
const db = require('../config/dbFiles/work_request');
import logger from '../middleware/winston';


const router = express.Router(); 

router.use(function(req,res,next){
logger.debug(
    '-The IP IS-' + req.ip +
'-Body-' + JSON.stringify(req.body) +
'-Base URL-' + req.baseUrl +
'-HostName-' + req.hostname +
'-Method-' + req.method);
next();
});

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

router.post('/', async(req,res,next) => {
    let insertObject = {
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        request: req.body.request,
        severity: req.body.severity,
        _completed: req.body._completed,
        status: req.body.status
        
    }
    
    try {
        logger.info('Request Object' +  JSON.stringify(insertObject));
        let results = await db.insert(insertObject);
        console.log(results);
        res.status(201).json(results);
      
    } catch(err) {
        logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip} - `);
        res.status(500).send(err);
    }
})

router.put('/', async(req,res,next) => {
    let insertObject = {
        id: req.body.id,  
        status: req.body.status,
        severity: req.body.severity,
        _completed: req.body._completed 
    }

    console.log(insertObject);
    
    logger.info('Request Object' +  JSON.stringify(insertObject));

    try {
        let results = await db.update(insertObject);
        console.log(results);
        res.status(201).json(results);
      
    } catch(err) {
        logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip} - `)
        res.status(500).send(err);
    }
})


module.exports = router;