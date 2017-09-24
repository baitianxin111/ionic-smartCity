/**
 * Created by suc on 2017/9/20.
 */
define(['app'],function (app) {
  app.run(function ($ionicPlatform,$ionicPopup,$timeout,$interval,$rootScope) {
      $ionicPlatform.ready(function () {
        if(window.cordova && window.cordova.cordova.plugins.Keyboard){
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar){
            StatusBar.styleDefault();
        }
      })
    })
})
