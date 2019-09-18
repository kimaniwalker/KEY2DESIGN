import * as baseService from './base';

async function postCharge(token, amount, description, phone, email) {

    try {
        let response = await baseService.makeFetch('/api/donate', {
            method: 'POST',
            body: JSON.stringify({ token, amount, description, phone, email }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })

        });
        
            


        let contentType = response.headers.get('Content-Type');

        if (contentType.indexOf('application/json') > -1) {
            
            return response.json();

        }
       
        return response.statusText;


    }
    catch(err) {

        console.log(err);
    }

}



export { postCharge };