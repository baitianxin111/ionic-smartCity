/**
 * Created by suc on 2017/9/27.
 */
define(['app'],function (app) {
  app.controller("pwdCtrl",function ($state,$scope,$ionicPopover,$ionicPlatform,$ionicViewSwitcher) {
    $scope.goBack = function () {
      $state.go('setting');
      $ionicViewSwitcher.nextDirection('back');
    }
    $ionicPlatform.registerBackButtonAction(function () {
      $scope.goBack();
    },999)
  })
})
