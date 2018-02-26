'use strict';

const { Issuer } = require('..');

const {
  ISSUER = 'http://localhost:9000',
  PORT = 3333,
} = process.env;

const appFactory = require('./app');


const issuer = new Issuer({

  issuer: `${ISSUER}`,
  authorization_endpoint: `${ISSUER}/oauth2/auth`,
  token_endpoint: `${ISSUER}/oauth2/token`,
  introspection_endpoint: `${ISSUER}/oauth2/introspect`,
  userinfo_endpoint: `${ISSUER}/userinfo`,
  jwks_uri: `${ISSUER}/keys/hydra.openid.id-token/public`,
});


const app = appFactory(issuer);
app.listen(PORT);
