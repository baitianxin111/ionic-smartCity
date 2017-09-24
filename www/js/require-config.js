require.config({
  baseUrl: './',
  map: {
    '*': {
      'css': 'lib/require-css/css' // or whatever the path to require-css is
    }
  },
  paths: {
    'app': 'js/app',
    'appConfig': 'js/app-config',
    'routes': 'js/routes',
    'ionic': 'lib/ionic/js/ionic.bundle',
    'ngCordova': 'lib/ngCordova/dist/ng-cordova.min',
    'bootstrap': 'js/bootstrap',
    'zepto': 'lib/zepto/zepto.min',
    'asyncLoader': 'lib/angular-async-loader/angular-async-loader',
    'appCtrl':'js/controllers/appController',
  },
  shim: {
    'ionic': {
      exports: 'ionic'
    },
    'app': {
      deps: ['ionic']
    },
    'routes': {
      deps: ['ionic', 'app']
    },
    'appConfig': {
      deps: ['ionic','app']
    },
    'appCtrl': {
      deps: ['ionic','app']
    },
  },
  deps: [
    'bootstrap'
  ]
});
