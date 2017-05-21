// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCcDclzNAmd5NrIK0w1mXrTKg6ABzMsDMQ',
    authDomain: 'website-d0a07.firebaseapp.com',
    databaseURL: 'https://website-d0a07.firebaseio.com',
    storageBucket: 'website-d0a07.appspot.com',
    messagingSenderId: '10707548851'
  },
  intraRedirectUrl: "https://api.intra.42.fr/oauth/authorize?client_id=0f82b31736baf6cecd13299061928f243962e0b8fce022aa7ba32a24ecc6c7b0&redirect_uri=https%3A%2F%2Fus-central1-website-d0a07.cloudfunctions.net%2Flogin&response_type=code"
};
