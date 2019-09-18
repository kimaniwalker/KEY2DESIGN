import * as baseService from './base';
function sendContacEmail(name,email,message) {
    return baseService.post('/api/contact', {
        name,
        email,
        message
    });


}

export { sendContacEmail }