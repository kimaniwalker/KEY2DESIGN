import { Router } from 'express';
const bodyParser = require('body-parser');
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
    `
    <!DOCTYPE html><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
      body {width: 600px;margin: 0 auto;}
      table {border-collapse: collapse;}
      table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
      img {-ms-interpolation-mode: bicubic;}
    </style>
    <![endif]-->
    <style type="text/css">
      body, p, div {
        font-family: arial,helvetica,sans-serif;
        font-size: 14px;
      }
      
      .header {
          height: 150px;
          background-color: #108dc8;
          
      }
      
      .center {
      display: block;
margin-left: auto;
margin-right: auto;
padding-top: 13px;
      }
    </style>
  </head>
  <body>
    <div class="header">
        <img src="http://cdn.mcauto-images-production.sendgrid.net/265b059c9faa0055/cb0b69fb-9a08-46ff-bfaf-9d475bce9b5c/906x592.png" class="center" alt="Logo" height="100">
    </div>
    <div>
        <p>
        <p>
            Sent From: ${req.body.email}
            </p>

              <p>
             Name: ${req.body.name}
             </p>
             
            <p>
             Message: ${req.body.message}
             </p>

             
             
            
        </p>
    </div>

</body></html>`;

  /* logger.info('Sending This In Contact Form - ' + JSON.stringify(messageBody)) */

  sendEmail('admin@key2design.io', 'no-reply-support@key2design.io', 'New Contact Form Submission', messageBody)
    .then((response) => {
      console.log(response);
      res.sendStatus(201);
    }).catch((err) => {
      logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip} - `);
      next('this is an error' + err);
    });
})

router.post('/contactTicket', (req, res, next) => {

  let messageBody =
    `
    <!DOCTYPE html><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
      body {width: 600px;margin: 0 auto;}
      table {border-collapse: collapse;}
      table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
      img {-ms-interpolation-mode: bicubic;}
    </style>
    <![endif]-->
    <style type="text/css">
      body, p, div {
        font-family: arial,helvetica,sans-serif;
        font-size: 14px;
      }
      
      .header {
          height: 150px;
          background-color: #108dc8;
          
      }
      
      .center {
      display: block;
margin-left: auto;
margin-right: auto;
padding-top: 13px;
      }
    </style>
  </head>
  <body>
      <p>Hello Kimani</p>
      <p>A new ticket has been created</p>

      <p> Name: ${req.body.name}</p>
      <p> Email: ${req.body.email}</p>
      <p> Phone: ${req.body.phone}</p>
      <p> Message: ${req.body.message}</p>
      <p> Severity: ${req.body.severity}</p>
      <p> Status: ${req.body.status}</p>

  </body>
  
  </html>`;

  /* logger.info('Sending This In Contact Form - ' + JSON.stringify(messageBody)) */

  sendEmail('admin@key2design.io', 'no-reply-support@key2design.io', 'New Contact Form Submission', messageBody)
    .then((response) => {
      console.log(response);
      res.sendStatus(201);
    }).catch((err) => {
      logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip} - `);
      next('this is an error' + err);
    });
})

router.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res, next) => {

  let messageBody;

  try {
    messageBody = JSON.parse(request.body);
  }
  catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (messageBody.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = messageBody.data.object;
      handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'payment_method.attached':
      const paymentMethod = messageBody.data.object;
      handlePaymentMethodAttached(paymentMethod);
      break;
    // ... handle other event types
    default:
      // Unexpected event type
      return response.status(400).end();
  }
  // Return a response to acknowledge receipt of the event
  response.json({ received: true });


  /* logger.info('Sending This In Contact Form - ' + JSON.stringify(messageBody))

  
  
  
  
  
  
  sendEmail('admin@key2design.io', 'no-reply-admin@key2design.io', 'New Contact Form Submission', messageBody)
      .then((response) => {
          console.log(response);
          res.sendStatus(201);
      }).catch((err) => {
          logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip} - `);
          next('this is an error' + err);
      }); */
})

export default router;