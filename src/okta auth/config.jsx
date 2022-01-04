const OKTA_DOMAIN = "dev-91868223.okta.com";
const CLIENT_ID = "0oa3euf1wsa8hq0h65d7"
const CALLBACK_PATH = '/login/callback';

const ISSUER = `https://${OKTA_DOMAIN}/oauth2/default`;
const HOST = window.location.host;
const REDIRECT_URI = `http://${window.location.host}/login/callback`;
const SCOPES = 'openid profile email';

export const config = {
  issuer: ISSUER,
  clientId: CLIENT_ID,
  redirectUri: REDIRECT_URI,
  scopes: SCOPES.split(/\s+/)
};

