export const environment = {
    production: false,
    // the container needs your ip address sincr the api's running in a host port,
    url: 'http://yout-IP-address:3000/',
    config: {
      domain: 'dev-3f45fsqiwdpfl2ds.us.auth0.com',
      clientId: 'aphDtO4yTGzIEsmp9Wa37msp7cC2X5tX',
      audience: 'https://roadrunners-api/',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }
};
