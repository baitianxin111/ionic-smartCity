/**
 * Created by suc on 2017/9/21.
 */
define(['app'],function (app) {
  app.controller('indexCtrl',function ($scope,$state,$rootscope,$ionicViewSwitcher) {
    $scope.goShebei = function () {
      $state.go('index.shebei');
      $ionicViewSwitcher.nextPosition('forward');
    }
    $scope.goMeijin = function () {
      $state.go(' index.menjin');
      $ionicViewSwitcher.nextPosition('forward');

    }
    $scope.goKaoqin = function () {
      $state.go('index.kaoqin');
      $ionicViewSwitcher.nextPosition('forward');

    }
  })

})
