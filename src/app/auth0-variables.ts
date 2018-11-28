interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    clientID: '{ClientID}',
    domain: '{DOMAIN}',
    callbackURL: 'http://localhost:4200/callback'
  };