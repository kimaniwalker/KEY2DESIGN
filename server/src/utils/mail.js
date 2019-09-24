
import { config } from '../config';
const sgMail = require('@sendgrid/mail');




function sendEmail(to, from, subject, content) {
    
    sgMail.setApiKey(config.SENDGRID_API_KEY);
    let msg = {
        from,
        to,
        subject,
        html: content
    };
    console.log(msg);

    return sgMail.send(msg);
    
    
}

export { sendEmail };