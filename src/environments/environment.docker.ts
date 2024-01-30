export const environment = {
    production: false,
    // the container needs your ip address sincr the api's running in a host port,
    url: 'http://yout-IP-address:3000/',
    config: {
      domain: '',
      clientId: '',
      audience: '',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }
};
