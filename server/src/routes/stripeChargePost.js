
import { Router } from 'express';
import Table from '../table';

let router = Router();

let stripe_charges = new Table('stripe_charges');

router.post('/', (req, res) => {
    let charges = req.body;

    stripe_charges.insert(charges)
        .then(id => {
            res.json(id);
        })
})

export default router;