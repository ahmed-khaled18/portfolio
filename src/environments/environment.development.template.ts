import type { Environment } from './environment.model';

// This is a template file. Copy this to environment.development.ts and add your actual keys.
// See docs/GITHUB_SECRETS.md for setup instructions.

export const environment: Environment = {
  production: false,
  web3forms: {
    accessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
    endpoint: 'https://api.web3forms.com/submit',
  },
};
