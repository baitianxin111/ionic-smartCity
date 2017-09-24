/**
 * Created by suc on 2017/9/24.
 */
define(['app'],function (app) {
  app.controller("settingCtrl",function ($state,$scope,$ionicViewSwitcher,$ionicPlatform) {
    $scope.goBack = function () {
      $state.go('index.shebei');
      $ionicViewSwitcher.nextDirection('forward');
    }
    $ionicPlatform.registerBackButtonAction(function () {
      $scope.goBack();
    },999);
  })
})
