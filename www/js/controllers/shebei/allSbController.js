/**
 * Created by suc on 2017/9/22.
 */
define(['app'],function (app) {
  app.controller('allSbCtrl',function ($state,$scope,$ionicViewSwitcher,$ionicPlatform,$stateParams) {
      $scope.goBack = function () {
        $state.go('index.shebei');
        $ionicViewSwitcher.nextDirection('back');
      }
      $ionicPlatform.registerBackButtonAction(function () {
        $scope.goBack();
      },999)
    //数据模拟
    $scope.leftMenu = [
      {
        name :"一层",
        selected :false,
        children :[
          {name:"会议室1"},
          {name:"会客室"},
          {name:"大厅"}
        ]
      },
      {
        name:"二层",
        selected:false,
        children:[
          {name:"会议室2"},
          {name:"会客室2"},
          {name:"大厅2"}
        ]
      }

    ];
    $scope.rightList = [
      {name :"灯光1"},
      {name :"灯光2"}
    ];
    $scope.model = {
      type : $stateParams.type
    }
    $scope.changeType = function (type) {
      $scope.model.type = type ;
      if(type == '窗帘'){
        $scope.rightList = [
          {name:"窗帘1"},
          {name:"窗帘2"},
        ]
      }
      else if(type == '空调'){
        $scope.rightList = [
          {name:"空调1"},
          {name:"空调2"},
        ]
      }
     else if(type == '灯光'){
        $scope.rightList = [
          {name:"灯光1"},
          {name:"灯光2"},
        ]
      };

    }
    $scope.openDateil = function () {

    }
  })

})
