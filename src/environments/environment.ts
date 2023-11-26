export const environment = {
    production: true,
    url: 'https://roadrunners-backend.onrender.com/',
    key: ${{ secrets.KEY }},
    config: {
      domain: ${{ secrets.DOMAIN }},
      clientId: ${{ secrets.CLIENTID }},
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }
};
