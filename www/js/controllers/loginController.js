/**
 * Created by suc on 2017/9/20.
 */
define(['app'],function (app) {

  app.controller('loginCtrl',function ($state,$ionicPlatform,$scope) {

    $ionicPlatform.registerBackButtonAction(function (e) {
      window.ionic.platform.eixtApp = true;
    },999)
    $scope.model =   {
      username : window.$$appConfig.appUser.username,
      password : window.$$appConfig.appUser.password,
      error :"",
      "remember-me" : 'on'

    }
    $scope.check = function () {
      $state.go(index.shebei);
      $ionicViewSwitcher.nextPosition = "forward";
    }

  })

})
