const express = require('express');
const db = require('../config/dbFiles/work_request');



const router = express.Router();

router.get('/', async (req, res, next) => {

    try {
        let results = await db.all();
        res.json(results);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

});

router.get('/:id', async (req, res, next) => {

    try {
        let results = await db.one(req.params.id);
        res.json(results);

    } catch (err) {

        console.log(err);
        console.log('test');
        res.sendStatus(500);
    }

});

router.post('/', async (req, res, next) => {
    let insertObject = {
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        request: req.body.request,
        severity: req.body.severity,
        status: req.body.status

    }




    try {
        
        
        let results = await db.insert(insertObject);
        console.log(results);
        res.status(201).json(results);
        


    } catch (err) {
        res.status(500).send(err);
    }
})

router.put('/', async (req, res, next) => {
    let insertObject = {
        id: req.body.id,
        status: req.body.status,
        severity: req.body.severity,
        _lastModified: req.body._lastModified

    }

    console.log(insertObject);

    try {
        let results = await db.update(insertObject);
        console.log(results);
        res.status(201).json(results);

    } catch (err) {
        res.status(500).send(err);
    }
})


module.exports = router;