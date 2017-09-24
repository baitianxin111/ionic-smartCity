/**
 * Created by suc on 2017/9/21.
 */
define(['app'],function (app) {
  app.controller('indexCtrl',
    function ($scope,$state,$rootScope,$ionicViewSwitcher) {
    $scope.goShebei = function () {
      $state.go('index.shebei');
      $ionicViewSwitcher.nextDirection('forward');
    }
    $scope.goMenjin = function () {
      $state.go('index.menjin');
      $ionicViewSwitcher.nextDirection('forward');

    }
    $scope.goKaoqin = function () {
      $state.go('index.kaoqin');
      $ionicViewSwitcher.nextDirection('forward');

    }
  })

})
