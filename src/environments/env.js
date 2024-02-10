const setEnv = () => {

    require('dotenv').config({path: 'src/environments/.env'});
    const fs = require('fs');
    const writeFile = fs.writeFile;

    const path = './environment.prod.ts';
    const env = `
    export const environment = {
        production: true,
        url: '${process.env.URL}',
        config: {
            domain: '${process.env.DOMAIN}',
            clientId: '${process.env.CLIENT_ID}',
            audience: '${process.env.AUDIENCE}',
            authorizationParams: {
                redirect_uri: window.location.origin
            }
        }
    };`;
    
    writeFile(path, env, (err) => {
        if (err) {
            console.error(err);
            throw err;
        } else {
            console.log(`Angular environment.prod.ts file generated correctly at ${path} \n`);
        }
    });
};

setEnv();