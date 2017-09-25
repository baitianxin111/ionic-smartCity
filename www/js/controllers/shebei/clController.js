/**
 * Created by suc on 2017/9/25.
 */
define(['app'],function (app) {
  app.controller('clCtrl',function ($scope,$state,$stateParams,$ionicViewSwitcher,$ionicPlatform) {
  $state.params = $stateParams ;
  $scope.goBack = function () {
    $state.go('index.allSb');
    $ionicViewSwitcher.nextDirection('forward');
  }

  })

})
