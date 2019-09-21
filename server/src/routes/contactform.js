import { Router } from 'express';
import { sendEmail } from '../utils/mail';
import logger from '../middleware/winston';

let router = Router();

router.use(function (req, res, next) {
    logger.debug('Sent From: ' + req.ip +
        'Request Type: ' + req.method +
        'API URL: ' + req.baseUrl +
        'Host Name: ' +
        'Request Object: ' + JSON.stringify(req.body));
    next();
});

router.post('/', (req, res, next) => {

    let messageBody =
        `Name: ${req.body.name}
    Email: ${req.body.email}
    Message: ${req.body.message}`;

    logger.info('Sending This In Contact Form - ' + JSON.stringify(messageBody))

    sendEmail('kimaniwalker@gmail.com', 'no-reply-keywebdesign@gmail.com', 'New Contact Form Submission', messageBody)
        .then((response) => {
            console.log(response);
            res.sendStatus(201);
        }).catch((err) => {
            logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip} - `);
            next('this is an error' + err);
        });
})

export default router;