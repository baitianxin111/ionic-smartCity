 define(['ionic',
          'asyncLoader'],
   function (ionic,asyncLoader) {
     var app = angular.module('zhly',['ui.router','ionic']);
     asyncLoader.configure(app);
     return app;
   }
 )
