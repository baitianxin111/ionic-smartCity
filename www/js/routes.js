/**
 * Created by suc on 2017/9/20.
 */
define(['app'],function (app) {
  app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state("login", { //登录
        url: "/login",
        templateUrl: "templates/login.html",
        controllerUrl:"js/controllers/loginController.js"
      })
      .state("index", { //首页底部tabs
        url: "/index",
        templateUrl: "templates/index.html",
        controllerUrl: "js/controllers/index/indexController.js",
        controller:"indexCtrl",
        abstract:true
      })
      .state("index.kaoqin",{ //考勤
        url:'/kaoqin',
        templateUrl:"templates/kaoqin/main.html",
        controllerUrl:"js/controllers/index/kaoqincController.js",
        controller:"kaoqinCtrl"
      })
      .state("index.menjin",{ //门禁
        url:'/menjin',
        templateUrl:"templates/menjin/main.html",
        controllerUrl:"js/controllers/index/menjinController.js",
        controller:"menjinCtrl"
      })
      .state("index.shebei",{ //设备
        url:'/shebei',
        templateUrl:"templates/shebei/main.html",
        controllerUrl:"js/controllers/index/shebeiController.js",
        controller:"shebeiCtrl"
      })
      .state('setting',{
        url:"/setting",
        templateUrl:"templates/setting/menu.html",
        controller:"settingCtrl",
        controllerUrl:"js/controllers/setting/settingController.js"
      })
      .state('index.allSb',{
        url:"allSb",
        templateUrl:"templates/shebei/allSb.html",
        controller:"allSbCtrl",
        controllerUrl:"js/controllers/shebei/allSbController.js"
      })


    $urlRouterProvider
      //以上什么也不选择时候，进入的页面
      .otherwise("/index/shebei");
    $urlRouterProvider
      //默认进入的页面
      .when("/index","/index/shebei")
  })

})
