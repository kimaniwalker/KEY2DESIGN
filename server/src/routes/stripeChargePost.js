
import { Router } from 'express';
import Table from '../table';
import logger from '../middleware/winston';

let router = Router();

let stripe_charges = new Table('stripe_charges');

router.use(function(req,res,next){
    logger.debug('Sent From: ' + req.ip + 
    'Request Type: ' + req.method +
    'API URL: ' + req.baseUrl +
    'Host Name: ' +
    'Request Object: ' +  JSON.stringify(req.body));  
    next();
    });

router.post('/', (req, res) => {
    let charges = req.body;
    logger.info('Request Object' +  JSON.stringify(charges));
    
    stripe_charges.insert(charges)
        .then(id => {
            res.json(id);
            logger.debug(res.statusCode + ' Item Saved Successfully To DB' + JSON.stringify(id));
            
        }).catch(err => {
            logger.error(`Error Posting to DB - ${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip} - `);
            console.log(err);
            res.sendStatus(500);
            
        })
})

export default router;