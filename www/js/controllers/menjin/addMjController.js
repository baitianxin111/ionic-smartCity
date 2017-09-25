/**
 * Created by suc on 2017/9/25.
 */
define(['app'],function (app) {
  app.controller("addMjCtrl",function ($scope,$state,$stateParams,$ionicViewSwitcher,$ionicPlatform,$ionicPopover,$timeout) {
    console.log("44444")
    $scope.goBack = function () {
      $state.go('index.menjin');
      $ionicViewSwitcher.nextDirection('back');
    }
    $ionicPlatform.registerBackButtonAction(function () {
      $scope.goBack();
    },999)
    //  所有门禁的一些测试数据
    $scope.list = [
      { name : "会客厅1",type : 1},
      { name : "会客厅2",type : 2},
      { name : "会客厅3",type : 2},
      { name : "会客厅4",type : 1},
      { name : "会客厅5",type : 1}
    ];
    $scope.placeList = [
      {name : "办公室1",selected :true},
      {name : "办公室2", },
      {name : "办公室3", },
      {name : "办公室4", },
      {name : "办公室5", }
    ];
    $scope.doorList = [
      {name : "门1"},
      {name : "门2"},
      {name : "门3"},
      {name : "门4"},
      {name : "门5"},
      {name : "门6"},
      {name : "门7"},
      {name : "门8"},
      {name : "门8"},
      {name : "门10"},
      {name : "门11"}
    ]
  })
})
