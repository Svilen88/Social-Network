// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBvaKESem0IajpGRt80RfXtPMaJIDXzEug',
        authDomain: 'socia-network-f86d8.firebaseapp.com',
        databaseURL: 'https://socia-network-f86d8.firebaseio.com',
        projectId: 'socia-network-f86d8',
        storageBucket: 'socia-network-f86d8.appspot.com',
        messagingSenderId: '454838916539'
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
