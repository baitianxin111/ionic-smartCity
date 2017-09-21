/**
 * Created by suc on 2017/9/20.
 */
define('app',function (app) {
  app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider.decorator('views',function(state,parent){
      var result = {},views = parent(state);
      var head = "";
      angular.forEach(views, function (config, name) {
        config.controllerUrl = head + config.controllerUrl;
        config.templateUrl = head + config.templateUrl;
        result[name] = config;
      });
      return result;
    })
    $stateProvider
      .state('login',{
        url :"/login",
        tempalteUrl :"templates/login.html",
        controllerUrl:"js/controllers/loginCtroller.js",

        }
        .state('index',{
          url :"/index",
          templateUrl:"templates/index.html",
          controllerUrl:"js/controllers/index/indexControllers.js"
        })
        .state('menjin',{
          url :"/menjin",
          templateUrl:"templates/menjin/main.html",
          controllerUrl:"js/controllers/index/menjinController.js"
        })
        .state('kaoqin',{
          url :"/kaoqin",
          templateUrl:"templates/kaoqin/main.html",
          controllerUrl:"js/controllers/index/kaoqinController.js"
        })
        .state('shebei',{
          url :"/index",
          templateUrl:"templates/shebei/main.html",
          controllerUrl:"js/controllers/index/shebeiController.js"
        })

      )
  })
})
