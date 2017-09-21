 define(['ionic',
          'asyncLoader',
          'ngCordova',
          'cgsDirectives',
          'positionService',
          'ngCookies',
          'css!lib/animate.css/animate.min'
 ],
   function (ionic,asyncLoader) {
        var app = angular.module('zhly',['ui.router','ionic','ngCordova','cgs.ionic.directive','positionService','ngCookies']);
        asyncLoader.configure(app);
        return app;

   }
 )
