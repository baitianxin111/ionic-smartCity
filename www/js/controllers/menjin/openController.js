/**
 * Created by suc on 2017/9/25.
 */
define(['app'],function (app) {
  app.controller('openDoorCtrl',function ($state,$scope,$stateParams,$ionicViewSwitcher,$ionicPlatform) {
    $scope.goBack = function () {
      if($stateParams.type = 'allMj'){
        $state.go('index.allMj')
      }else{
        $state.go('index.menjin')
      }
      $ionicViewSwitcher.nextDirection('back');
    }
    $ionicPlatform.registerBackButtonAction(function () {
      $state.goBack();
    },999)

  })
})
