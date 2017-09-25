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
      .state("index.kqHistory",{ //考勤
        url:'/history',
        templateUrl:"templates/kaoqin/history.html",
        controllerUrl:"js/controllers/kaoqin/historyController.js",
        controller:"historyCtrl"
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
      .state('setting',{ //设置
        url:"/setting",
        templateUrl:"templates/setting/menu.html",
        controller:"settingCtrl",
        controllerUrl:"js/controllers/setting/settingController.js"
      })
      .state('index.allSb',{
        url:"/allSb",
        params: {type : '灯光'},
        templateUrl:"templates/shebei/allSb.html",
        controller:"allSbCtrl",
        controllerUrl:"js/controllers/shebei/allSbController.js"
      })
      .state('index.dg',{
        url : '/dg',
        params :{id :null,name : null},
        templateUrl :"templates/shebei/dg.html",
        controllerUrl :"js/controllers/shebei/dgController.js",
        controller : "dgCtrl"
      })
      .state('index.kt',{
        url :'/kt',
        params :{id :null,name : null},
        templateUrl :"templates/shebei/kt.html",
        controllerUrl :"js/controllers/shebei/ktController.js",
        controller : "ktCtrl"
      })
      .state('index.cl',{
        url : '/cl',
        params :{id :null,name : null},
        templateUrl :"templates/shebei/cl.html",
        controllerUrl :"js/controllers/shebei/clController.js",
        controller : "clCtrl"
      })
      .state('index.allMj',{ //门禁的
      url : '/allMj',
      templateUrl :"templates/menjin/allMj.html",
      controllerUrl :"js/controllers/menjin/allMjController.js",
      controller : "allMjCtrl"
    })
      .state('index.addMj',{ //添加门禁
        url : '/addMj',
        templateUrl :"templates/menjin/addMj.html",
        controllerUrl :"js/controllers/menjin/addMjController.js",
        controller : "addMjCtrl"
      })
      .state('index.openDoor',{ //打开门禁
        url : '/openDoor/:type/;id',
        templateUrl :"templates/menjin/open.html",
        controllerUrl :"js/controllers/menjin/openController.js",
        controller : "openDoorCtrl"
      })


    $urlRouterProvider
      //以上什么也不选择时候，进入的页面
      .otherwise("/index/shebei");
    $urlRouterProvider
      //默认进入的页面
      .when("/index","/index/shebei")
  })

})
