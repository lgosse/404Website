// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBBebpFnoZJ0ZBWeB6cvN-F4mdVWf0nTHc",
        authDomain: "dev-404website.firebaseapp.com",
        databaseURL: "https://dev-404website.firebaseio.com",
        projectId: "dev-404website",
        storageBucket: "dev-404website.appspot.com",
        messagingSenderId: "71979030642"
    },
    intraRedirectUrl: "https://api.intra.42.fr/oauth/authorize?client_id=0f82b31736baf6cecd13299061928f243962e0b8fce022aa7ba32a24ecc6c7b0&redirect_uri=https%3A%2F%2Fus-central1-website-d0a07.cloudfunctions.net%2Flogindev&response_type=code"
};
