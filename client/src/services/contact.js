import * as baseService from './base';
function sendContacEmail(name, email, message) {
    return baseService.post('/api/contact', {
        name,
        email,
        message
    });


}

function sendContactEmailTicket(name, email, message, phone, severity, status) {
    return baseService.post('/api/contact/contactTicket', {
        name,
        email,
        message,
        phone,
        severity,
        status
    });


}



export { sendContacEmail, sendContactEmailTicket }