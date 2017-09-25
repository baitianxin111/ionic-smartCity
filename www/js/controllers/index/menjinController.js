
/**
 * Created by suc on 2017/9/21.
 */
define(['app'],function (app) {
  app.controller('menjinCtrl',function ($scope,$state,$ionicViewSwitcher,$ionicPlatform) {
      $scope.list = [
        {name : "1楼大门"},
        {name : "2楼大门"},
        {name : "3楼大门"},
        {name : "4楼大门"},
        {name : "5楼大门"}
      ];
      $scope.allMJ = function () {
        $state.go('index.allMj');
        $ionicViewSwitcher.nextDirection('forward');
      }

  })

})
