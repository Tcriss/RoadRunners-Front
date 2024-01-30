export const environment = {
    production: false,
    url: 'http://localhost:3000/',
    // put your auth0 congi in order to it work properly
    config: {
      domain: '',
      clientId: '',
      audience: '',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }
};
