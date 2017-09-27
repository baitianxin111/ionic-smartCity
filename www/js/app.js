 define(['ionic',
          'asyncLoader',
          'cgsDirectives',
          'positionService'
   ],
   function (ionic,asyncLoader) {
     var app = angular.module('zhly',['ui.router','ionic','cgs.ionic.directive','positionService']);
     asyncLoader.configure(app);
     return app;
   }
 )
