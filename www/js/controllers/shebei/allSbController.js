/**
 * Created by suc on 2017/9/22.
 */
define(['app'],function (app) {
  app.controller('allSbCtrl',function ($state,$scope,$ionicViewSwitcher,$ionicPlatform) {
      $scope.goBack = function () {
        $state.go('index.shebei');
        $ionicViewSwitcher.nextDirection('back');
      }
      $ionicPlatform.registerBackButtonAction(function () {
        $scope.goBack();
      },999)
  })

})
