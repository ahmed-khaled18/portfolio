import type { Environment } from './environment.model';

// This is a template file. Copy this to environment.ts and add your actual keys.
// See docs/GITHUB_SECRETS.md for setup instructions.

export const environment: Environment = {
  production: true,
  web3forms: {
    accessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
    endpoint: 'https://api.web3forms.com/submit',
  },
};
