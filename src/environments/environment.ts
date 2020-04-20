// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false ,
  authServerUrl: 'http://localhost:8080',
  userServiceUrl: 'http://localhost:8080/user',
  authServerBaseUrl: 'http://localhost:8080/',
  apiUrl: 'http://localhost:9000',
  loginUrl: 'http://localhost:8080/login',
  authUrl: 'http://localhost:8080/oauth/token',
  clientId: 'yoga-app',
  clientSecret: 'yoga-369-app-123',
  grantType: "client_credentials"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
