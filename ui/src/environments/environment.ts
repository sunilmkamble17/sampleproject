// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // baseUrl: 'https://8x12yn4aj1.execute-api.us-east-1.amazonaws.com/dev/api', // Dev Environment
  // baseUrlEventBus: 'https://8x12yn4aj1.execute-api.us-east-1.amazonaws.com/dev/api', // Dev Environment
  // baseUrlUser: 'https://8x12yn4aj1.execute-api.us-east-1.amazonaws.com/dev/api', // Dev Environment
  // baseUrlProduct: 'https://8x12yn4aj1.execute-api.us-east-1.amazonaws.com/dev/api', // Dev Environment
  // baseUrlOrder: 'https://8x12yn4aj1.execute-api.us-east-1.amazonaws.com/dev/api', // Dev Environment

  baseUrlEventBus: 'localhost:4001',
  baseUrlUser: 'localhost:4002',
  baseUrlProduct: 'localhost:4003',
  baseUrlOrder: 'localhost:4004',
  // baseUrl: '', // Test Environment
  // baseUrl: '', // UAT Environment
  // baseUrl: '', // Prod Environment
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
